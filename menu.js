class menu {
    
    constructor(mensaje , opciones){
        this.mensaje = mensaje;
        this.opciones = opciones;
    };

    mostrarOpciones(){
        console.log(this.mensaje);
        for (let index = 0; index < this.opciones.length; index++) {
          
            console.log(`${index+1}.- ${this.opciones[index]}`);
              
            
        }
    }
    
    getUserInput(){
        let userInput = prompt("->")
        while(true){
            if(this.#validateInput(userInput)) return userInput-1
            userInput = prompt("No es una respuesta valida, intentelo de nuevo");
            
        }
    }

    #validateInput(input){
        return Boolean(Number(input))
    }
}


export default menu