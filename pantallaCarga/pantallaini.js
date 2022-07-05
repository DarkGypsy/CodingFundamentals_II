import title from "./title.js";
export default () => new Promise(res=>{

        let mensajeini = [`Disclaimer: esta es una obra de ficcion, los personajes son propiedad de Disney, la persente obra no está ligada a dicha empresa, es una historia escrita por un fan ` , `Escrito por: Diana Reyes` , `  
        
        `, `Revisado y evaluado por: DarkGypsy` , ` ` ,  `Realizado por: Diana Reyes & DarkGypsy`  ,  `Presentado para: Tzuzulcode` , `${title} \n`];
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
    


