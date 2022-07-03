import { data } from "../info/info.js";

class Texto {
    constructor(texto){
        this.texto = texto;
    }
    mostrarTexto(){
        data.forEach((item)=> {
            console.log(`${item.textos[this.texto]}`);
        })
    }
}

export default  Texto; 