import mostrartexto from "./Texto.js";
import data from "./info.js";
import menu from "../menu.js"

function nivel1(){
    console.log("%c Nivel 1\nPersonajes: Phineas y Ferb" , "color:blue;");
    mostrartexto(data.textos[0]);
    const desicion1 = new menu ("Elige una opcion " , [data.opciones[0] , data.opciones[1]]) 
    desicion1.mostrarOpciones();
    const respuesta1 = desicion1.getUserInput();
    if (respuesta1 === 0) {
        mostrartexto(data.textos[1]);
        const desicion2 = new menu ("Elige una opcion" , [data.opciones[2] , data.opciones[3]]);
        desicion2.mostrarOpciones();
        const respuesta2 = desicion2.getUserInput();
        if(respuesta2 === 0) {
            mostrartexto(data.textos[2]);
            mostrartexto("Ganaron " + data.resultados[0])
        } else if (respuesta2 === 1) {
            mostrartexto(data.textos[3]);
            mostrartexto("Ganaron " + data.resultados[1]);
        }
    }else if (respuesta1 === 1) {
        mostrartexto(data.textos[4]);
        const desicion3 = new menu ("Elige una opcion " , [data.opciones[2], data.opciones[3]]) 
        desicion3.mostrarOpciones();
        const respuesta3 = desicion3.getUserInput();
        if (respuesta3 === 0) {
            mostrartexto(data.textos[5]);
            mostrartexto("Ganaron " + data.resultados[1]); 
        } else if(respuesta3 === 1) {
            mostrartexto(data.textos[6]);
            const desicion4 = new menu ("Elige una opcion" , [data.opciones[4],data.opciones[5]]);
            desicion4.mostrarOpciones();
            const respuesta4 = desicion4.getUserInput();
            if (respuesta4 === 0) {
                mostrartexto(data.textos[7]);
                mostrartexto("Ganaron " + data.resultados[1]); 
            }else if (respuesta4 === 1) {
                mostrartexto(data.textos[8]);
                mostrartexto("Perdieron " + data.resultados[2]); 
            } 
        }
    }
}
export default nivel1;