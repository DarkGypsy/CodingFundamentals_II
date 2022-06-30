export default () => new Promise(res=>{

        let mensajeini = [` 
        
        ` , `credito 1` , `  
        
        `, `credito 2` , ` 
        
        ` , ` 
        
        `  ,  `Tzuzulcode`];
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
    


