import Menu from "./other/menu.js";
import barra from "./barra/barra.js"
import pantallaini from "./pantallaCarga/pantallaini.js";
import cheats from "./other/claves.js"
import nivel1 from "./Nivel1/nivel1.js"
import {pickColor} from "./other/color.js";


async function start(){
    const menu = new Menu("Menu Inicio",[
        "Nuevo Juego",
        "Codigos", "Color"
        
    ]);
    await barra();
    await pantallaini();
    menu.mostrarOpciones();
    const userInput = menu.getUserInput();
    if (userInput === 0) {
        nivel1();
        
    }
    if (userInput === 1) {
        cheats();
        
    }
 
    if (userInput === 2){
      
        pickColor();
      
    }
    
}
export default start 


start()