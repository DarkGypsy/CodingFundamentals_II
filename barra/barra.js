export default () => new Promise(res=>{
        let cont = 0
        const interval = setInterval(()=>{
            if(cont===100){
                clearInterval(interval)
                res(true)
            }
            console.clear()
            console.log(`Descargando contenido necesario ${cont}%`)
            console.log("|".repeat(cont))
            cont = cont + 5;
        },500)
})