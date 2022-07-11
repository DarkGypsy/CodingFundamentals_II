import start from "../index.js";
import mostrartexto from "./Texto.js";

var color = 'white'

function pickColor(){
    color = prompt('Escribe un color hexadecimal');
    mostrartexto('Reiniciando y guardando cambios...' , color);
    const wait = setTimeout(()=>{

        start();

       }, 3000);
};

export {pickColor as pickColor , color as color }