import combate from "./combate.js"
import {player , enemy} from "./characters.js"
import mostrartexto from "../other/Texto.js";
import {color} from "../other/color.js"
import texto from "./info.js"

function nivelSecreto() {
    
    mostrartexto(texto[0] , color)
    
    combate(player , enemy.Troll);
    
    console.clear();
    
    mostrartexto(texto[1] , color);
    
    combate(player , enemy.Bruja);

    console.clear();

    mostrartexto(texto[2] , color);

    combate(player , enemy.Boris);

    console.clear()

    mostrartexto(texto[3] , color);

    combate(player , enemy.Perry);

    console.clear();

    mostrartexto(texto[4] , color);

}

export default nivelSecreto;
