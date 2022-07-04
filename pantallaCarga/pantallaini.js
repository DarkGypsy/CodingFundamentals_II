import title from "./title.js";
export default () => new Promise(res=>{

        let mensajeini = ["Realizado por","François Emperador", "Diana Reyes", "Para: Tzuzulcode",title];
        let cont = 0;
        const mensajes = setInterval(() => {
            if(cont===mensajeini.length-1){
                clearInterval(mensajes)
                res(true)
            }
            console.clear();
            console.log(mensajeini[cont]);
            cont++
        }, 1000);
    })
    


