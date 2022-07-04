class Menu {
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


export default Menu