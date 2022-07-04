import menuInicio  from "./Menu/MenuOpciones.js";
import barra from "./barra/barra.js"
import pantallaini from "./pantallaCarga/pantallaini.js";
import cheats from "./claves.js"
async function start(){
    await barra()
    await pantallaini()
    await menuInicio()
    if (userInput === 1) {
        console.log("Poner el juego acá")
    }
    if (userInput === 2) {
        cheats();
    }
    console.log(menuInicio.getUserInput())

 }
export default start


start()