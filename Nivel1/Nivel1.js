import Opciones from "./Opciones.js";
import Resultado from "./Resultado.js";
import Texto from "./Texto.js";

function Nivel1(){
    console.log("Phineas y Ferb");
    const texto1 = new Texto(0);
    texto1.mostrarTexto();
    const desicion1 = new Opciones([0,1]) 
    desicion1.mostrarOpciones();
    const respuesta1 = desicion1.validarInputUsuario();

    if (respuesta1 === 1) {
        const texto2 = new Texto(1);
        texto2.mostrarTexto();
        const desicion2 = new Opciones([4,5]);
        desicion2.mostrarOpciones();
        const respuesta2 = desicion2.validarInputUsuario();
        if(respuesta2 === 1) {
            const texto3 = new Texto(2);
            texto3.mostrarTexto();
            const resultado1 = new Resultado("GANARON", 0)
            resultado1.mostrarResultado();
        } else if (respuesta2 === 2) {
            const texto4 = new Texto(3);
            texto4.mostrarTexto();
            const resultado2 = new Resultado("GANARON", 1)
            resultado2.mostrarResultado();
        }
    }else if (respuesta1 === 2) {
        const texto5 = new Texto(4);
        texto5.mostrarTexto();
        const desicion3 = new Opciones([2,3]) 
        desicion3.mostrarOpciones();
        const respuesta3 = desicion3.validarInputUsuario();
        if (respuesta3 === 1) {
            const texto6 = new Texto(5);
            texto6.mostrarTexto();
            const resultado3 = new Resultado("GANARON", 1)
            resultado3.mostrarResultado();  
        } else if(respuesta3 === 2) {
            const texto7 = new Texto(6);
            texto7.mostrarTexto();
            const desicion4 = new Opciones([4,5]);
            desicion4.mostrarOpciones();
            const respuesta4 = desicion4.validarInputUsuario();
            if (respuesta4 === 1) {
                const texto8 = new Texto(7);
                texto8.mostrarTexto();
                const resultado3 = new Resultado("GANARON", 1)
                resultado3.mostrarResultado();
            }else if (respuesta4 === 2) {
                const texto9 = new Texto(8);
                texto9.mostrarTexto();
                const resultado4 = new Resultado("PERDIERON", 2)
                resultado4.mostrarResultado(); 
            } 
        }
    }
}

export default Nivel1

