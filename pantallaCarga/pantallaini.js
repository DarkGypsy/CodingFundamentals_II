export default () => new Promise(res=>{

        let mensajeini = [`Se ecucha una puerta abrirse` , `Escuhas pasos que se acercan a ti` , `Se escucha alguien acercandose` , `Cada vez está mas cerca...`];
        let cont = 0;
        const mensajes = setInterval(() => {
            if(cont===mensajeini.length-1){
                clearInterval(mensajes)
                res(true)
            }
            console.clear();
            console.log(mensajeini[cont]);
            cont++
        }, 2000);
    })
    


