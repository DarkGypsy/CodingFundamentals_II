import Menu from "./menu.js";
import barra from "./barra/barra.js"
import pantallaini from "./pantallaCarga/pantallaini.js";
import cheats from "./claves.js"
import nivel1 from "./Nivel1/nivel1.js"
async function start(){
    const menu = new Menu("Menu Inicio",[
        "Nuevo Juego",
        "Codigos",
        
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
   
    
}
export default start


start()