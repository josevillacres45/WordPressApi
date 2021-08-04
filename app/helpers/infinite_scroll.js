import { PostCard } from "../components/PostCard.js";
import { SearCard } from "../components/SearchCard.js";
import api from "./wp_api.js";
import { ajax } from "./ajax.js";

export async function InfiniteScroll() {
    const d = document,
          w = window;

    let query = localStorage.getItem("wpSearch"),
        apiUrl ,
        Component;       
    
    w.addEventListener("scroll", async e => {
        let { scrollTop, clientHeight, scrollHeight } = d.documentElement,
            { hash } = w.location;

        if(scrollTop + clientHeight >= scrollHeight) {
            api.page++;


            if(!hash || hash === "#/"){
                apiUrl = `${api.POSTS}&page=${api.page}`;
                Component = PostCard;
            } else if (hash.includes("#/search")) {
                apiUrl = `${api.SEARCH}${query}&page=${api.page}`;
                Component = SearCard;
            } else {
                return false;
            } 
    
            d.querySelector(".loader").style.display = "block";
            
            await ajax({
                url: apiUrl,
                onSuccess: (data) => {
                    let html = "";
                    data.forEach((post) => (html += Component(post)));
                    d.querySelector(".loader").style.display = "none";
                    d.getElementById("main").insertAdjacentHTML("beforeend", html);
                }
            });



        }
    });
    
}