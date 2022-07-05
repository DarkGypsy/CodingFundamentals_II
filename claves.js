import start from "./index.js";
function cheats() {
    var cheats = prompt("Ingrese un codigo");
    if (cheats === "malvados y asociados") {
        console.log("Dr. Doofenshmirtz: Si el juego estuviese completo podría mostrarte mi nuevo rayo que hace que todos lean esto con mi voz lo llamo el rayo vocinador");
        start();
    } else {
        console.log("Codigo invalido, reiniciando el juego...");
       start();
    }
}
export default cheats