import { data } from "../info/info.js";

class Resultado {
    constructor(ganador, resultado){
        this.ganador = ganador;
        this.resultado = resultado;
    }
    mostrarResultado(){
        data.forEach((item)=> {
            console.log(`${this.ganador}  ${item.resultados[this.resultado]}`);
        })
    }
}

export default  Resultado; 