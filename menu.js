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
        let i = true;

        while(i == true){
            let userInput = prompt("->")
            if(this.#validateInput(userInput)){
                i = false;
                return userInput-1;
            } 
            console.log("No es una respuesta valida, intentelo de nuevo");
            this.mostrarOpciones();
        }
    }

    #validateInput(input){
        if (input <= this.opciones.length || input > 0) {
            return Number(input);           
        }
    }
}


export default menu