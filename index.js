import Menu from "./menu.js";
import barra from "./barra/barra.js"
import pantallaini from "./pantallaCarga/pantallaini.js";
import cheats from "./claves.js"
async function start(){
    const menu = new Menu("Menu Inicio",[
        "Nuevo Juego",
        "Codigos",
        
    ])
    await barra()
    await pantallaini()
    menu.mostrarOpciones()
    const userInput = menu.getUserInput();
    if (userInput === 0) {
        console.log("Poner el juego acá")
    }
    if (userInput === 1) {
        cheats();
    }
    console.log(menu.getUserInput())

}
export default start


start()