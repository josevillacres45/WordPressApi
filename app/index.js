//Este archivo no va en mayuscula ya que no es un archivo del 
//componente
//REACT: Es mejor trabajar con funciones ya que trabajar con una clase
//a la maquina le cuesta compilar la clase por temas de rendimiento es 
//mejor siempre trabajar con funciones(HOOKS)
import  api  from "./helpers/wp_api.js";
import {App} from "./App.js";

//Como es una manejador de eventos no ponemos parentesis
document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", () => {
    api.page = 1;
    App();
}); //VUELVE A EJECUTAR LA APLICACION

