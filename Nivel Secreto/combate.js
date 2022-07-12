import Menu from "../other/menu.js";
import mostrartexto from "../other/Texto.js";


function combate(player ,enemy){
    let damage;
    function numeroAzar(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
do {
    const menucombate = new Menu ('Que haras?' , ['Atacar' , 'Defender']);
    menucombate.mostrarOpciones();
    const cmbtInpt = menucombate.getUserInput();

    if (cmbtInpt === 0 ) {
        
        if (player.spd > enemy.spd) {
    
            mostrartexto(`${player.name} ataca primero
            ` , 'blue');
    
            damage = numeroAzar(player.atk[0] , player.atk[1]) - (enemy.def / 2);
    
            mostrartexto(`${player.name} hace ${damage} de dano
            ` , 'blue');
    
            enemy.hp = enemy.hp - damage;
    
            if (enemy.hp <= 0) {
                enemy.hp = 0;
                enemy.dead = true;
            }

            mostrartexto(`${enemy.name} HP: ${enemy.hp}
            ` , 'red')
    
            mostrartexto(`Es el turno de ${enemy.name}
            ` , 'red');
    
            damage = numeroAzar(enemy.atk[0] , enemy.atk[1]) - (player.def / 2);
    
            mostrartexto(`${enemy.name} hace ${damage} de dano
            ` , 'red');
    
            player.hp = player.hp - damage;
            
            if (player.hp <= 0) {
                player.hp = 0;
                player.dead = true;
            }

            mostrartexto(`${player.name} HP: ${player.hp}
            ` , 'blue')
        }else {
            mostrartexto(`${enemy.name} ataca primero
            ` , 'red');
    
            damage = numeroAzar(enemy.atk[0] , enemy.atk[1]) - (player.def / 2);
    
            if (player.hp <= 0) {
                player.hp = 0;
                player.dead = true;
            }

            player.hp = player.hp - damage;
    
            mostrartexto(`${player.name} HP: ${player.hp}
            ` , 'blue');
    
            mostrartexto(`${player.name} es tu turno!
            `);
    
            damage = numeroAzar(player.atk[0] , player.atk[1]) - (enemy.def / 2);
    
            mostrartexto(`${player.name} hace ${damage} de dano
            ` , 'blue');
    
            enemy.hp = enemy.hp - damage;
            
            if (enemy.hp <= 0) {
                enemy.hp = 0;
                enemy.dead = true;
            }

            mostrartexto(`${enemy.name} HP: ${enemy.hp}
            ` , 'red');
        }

    }
    
    if (cmbtInpt === 1) {
        
        mostrartexto(`${player.name} se defiende
        ` , 'blue');

        mostrartexto(`Es el turno de ${enemy.name}
        ` , 'red');
    
        damage = numeroAzar(enemy.atk[0] , enemy.atk[1]) - (player.def * 1.50);
        if (damage <= 0) {
            damage = 0;
        }
    
        mostrartexto(`${enemy.name} hace ${damage} de dano
        ` , 'red');
    
        player.hp = player.hp - damage;
            
        if (player.hp <= 0) {
            player.hp = 0;
            player.dead = true;
        }

        mostrartexto(`${player.name} HP: ${player.hp}
        ` , 'blue');
        mostrartexto(`${enemy.name} HP: ${enemy.hp}
        ` , 'red')

    }

    

    
} while (player.dead === false && enemy.dead === false);

if (enemy.dead === true) {
    mostrartexto(`${player.name} ES EL GANADOR!
    `);
    mostrartexto(`${player.name} : ${player.phrase[numeroAzar(0 , 3)]}
    ` ,'blue');
    const wait = setTimeout(()=>{


       }, 2000);
}


player.hp = 200;

}

export default combate