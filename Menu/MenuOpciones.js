import Menu from "./Menu.js"

const menuInicio = new Menu("Menu Inicio",[
   "Configuración",
   "Nivel"
])

const menuConfiguracion = new Menu("Configuración",[
    "Color de texto",
    "Velocidad de texto"
])


const menuNivel = new Menu("Configuración",[
    "Nivel1",
    "Nivel2"
])

export default () => new Promise(res=>{ 
    menuInicio.mostrarOpciones();
    const userInput = menuInicio.getUserInput();
    return userInput;
})

