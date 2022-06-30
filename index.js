import Menu from "./Rpg2.0/menu.js";
import barra from "./Rpg2.0/barra/barra.js"
import pantallaini from "./Rpg2.0/pantallaCarga/pantallaini.js";
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