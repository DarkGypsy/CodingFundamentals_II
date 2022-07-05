import start from "./index.js";
function cheats() {
    var cheats = prompt("Ingrese un codigo");
    if (cheats === "") {
        console.log("Poner un capitulo")
    } else {
        console.log("Codigo invalido, reiniciando el juego...");
       start();
    }
}
export default cheats