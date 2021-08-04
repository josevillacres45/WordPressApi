//Nombres de archivos en letra mayuscula,
//no esta en la carpeta componente por que es elemento padre
//del componente

import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";
import { InfiniteScroll } from "./helpers/infinite_scroll.js";

export function App(){
    const d = document,
          $root = d.getElementById("root");

    $root.innerHTML = null;      
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());
   
    Router();
    InfiniteScroll();
}

