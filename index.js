import Menu from "./Rpg2.0/menu.js";
import barra from "./Rpg2.0/barra/barra.js"
import pantallaini from "./Rpg2.0/pantallaCarga/pantallaini.js";

async function start(){
    const menu = new Menu("Dark Gipsy 2.0 RPG",[
        "opcion1",
        "opcion2",
        "opcion3"
    ])
    
    await barra()
    await pantallaini()
    menu.mostrarOpciones()
    
    console.log(menu.getUserInput())

}



start()