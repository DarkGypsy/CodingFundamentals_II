import combate from "./combate.js"
import {player , enemy} from "./characters.js"
import mostrartexto from "../other/Texto.js";
import {color} from "../other/color.js"
import texto from "./info.js"
import gameover from "../pantallaCarga/gameover.js"

function nivelSecreto() {
    let juegoculminado = false;
    do {
        
        mostrartexto(texto[0] , color)
        
        combate(player , enemy.Troll);
        
        if (player.dead === true) {
            break
           
        }

        console.clear();
        
        mostrartexto(texto[1] , color);
        
        combate(player , enemy.Bruja);
        
        if (player.dead === true) {
            break
           
        }

        console.clear();
    
        mostrartexto(texto[2] , color);
    
        combate(player , enemy.Boris);
        
        if (player.dead === true) {
            break
           
        }

        console.clear()
    
        mostrartexto(texto[3] , color);
    
        combate(player , enemy.Perry);
        
        if (player.dead === true) {
            break
           
        }

        console.clear();
    
        mostrartexto(texto[4] , color);
        juegoculminado = true;
    } while (player.dead === false && juegoculminado === false );

    if (player.dead === true) {
        gameover();
       
    }

}

export default nivelSecreto;
