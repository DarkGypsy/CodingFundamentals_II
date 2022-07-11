export default () => new Promise(res=>{

    let mensaje = [`Gracias por jugar` , ` `, `Nivel secreto escrito y producido por DarkGypsy` , ` `   ,  `Presentado para: Tzuzulcode`];
    let cont = 0;
    const mensajes = setInterval(() => {
        if(cont===mensaje.length-1){
            clearInterval(mensajes)
            res(true)
        }
        console.clear();
        console.log(mensaje[cont]);
        cont++
    }, 2000);
})