import start from "../index.js";
import nivelSecreto from "../Nivel Secreto/nivel secreto.js";
import {color} from "./color.js"
import mostrartexto from "./Texto.js";
function cheats() {
    var cheats = prompt("Ingrese un codigo");
    if (cheats === "malvados y asociados") {
        mostrartexto('Dr. Doofenshmirtz: Esto me recuerda a mi infancia en Gimmelshtump...' , color)
       const wait = setTimeout(()=>{
        console.clear();
        nivelSecreto();

       }, 5000);
    } else {
        mostrartexto("Codigo invalido, reiniciando el juego..." , color)
        wait = setTimeout(()=>{
            
            start();

           }, 5000);
    }
}
export default cheats