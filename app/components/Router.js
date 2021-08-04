import api from "../helpers/wp_api.js";
import {ajax} from "../helpers/ajax.js";
import {PostCard} from "./PostCard.js";
import { Post } from "./Post.js";
import { SearCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";

export async function Router(){
    const d = document,
          w = window,
          $main = d.getElementById("main");

    let { hash } = location;
    $main.innerHTML = null;

    if (!hash || hash === "#/"){
        $main.innerHTML = "<h2>Cargando etiquetas</h2>";
        
        await ajax({
            url: api.POSTS,
            onSuccess: (posts) => {
                let html = "";
                posts.forEach((post) => (html += PostCard(post)  ));
                d.querySelector(".loader").style.display = "none";
                $main.innerHTML = html;
            }
        });
    } else if (hash.includes("#/search")) {
        let query = localStorage.getItem("wpSearch");
        
        if (!query) {
            d.querySelector(".loader").style.display = "none";
            return false
        };

        await ajax({
            url: `${api.SEARCH}${query}`,
            onSuccess: (search) =>{
                console.log(search)
                let html = "";
                if (search.length === 0) {
                    html = `
                        <p class="error">
                            No existen resultados de busqueda para el termino 
                            <mark>${query}</mark>
                        </p>
                    `;
                } else {
                    search.forEach(post => html += SearCard(post));
                }

                $main.innerHTML = html;
            }
        });
        
    } else if (hash.includes("#/contacto")) {
        $main.appendChild(ContactForm());
    } else {
        let postCard = hash;
        await ajax({
            url: `${api.POST + postCard.slice(2)}`,
            onSuccess: (post) => {
                let html = Post(...post);
                $main.innerHTML = html;
                d.querySelector(".loader").style.display = "none";
            }
        });
    }
    d.querySelector(".loader").style.display = "none";
}

