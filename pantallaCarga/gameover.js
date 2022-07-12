export default () => new Promise(res=>{

    let mensaje = [ 'GAME OVER' ,`Gracias por jugar` , `Si lees esto es porque te gustó el juego :)`, `Nivel secreto escrito y producido por: DarkGypsy` , ` `   ,  `Presentado para: Tzuzulcode`];
    let cont = 0;
    const mensajes = setInterval(() => {
        if(cont===mensaje.length-1){
            clearInterval(mensajes)
            res(true)
        }
        console.clear();
        console.log(mensaje[cont]);
        cont++
    }, 4000);
})