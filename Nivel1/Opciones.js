import { data } from "../info/info.js";

class Opciones {
    constructor(opciones){
        this.opciones = opciones;
    }
    mostrarOpciones(){
        for (let index = 0; index < this.opciones.length; index++) {
            data.forEach((item)=> {
                console.log(`${index+1}.-${item.opciones[this.opciones[index]]}`); 
            })
       }
    }

    validarInputUsuario(){
        let condicion;
        let userInput;
        do {
            userInput = Number(prompt("->"));

            if (!(userInput === 1 || userInput === 2)) {
                console.log("No es una respuesta valida, intentalo de nuevo");
                this.mostrarOpciones();
                condicion = true;
            }else {
                condicion = false
                return userInput;
            }
        } while (condicion);
    }
}

export default  Opciones; 

