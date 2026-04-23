import express from 'express'

const PUERTO = 3000

//instancia servidor express
const app = express()

app.get('/',(req, res)=>{
    res.set('content-type', 'text/html') // cabecera
    //mime types
    res.status(200)                       //codigo de estado
    res.end('<h1>hola con get<h1>')               //cuerpo_contenido
})

app.get('/materias',(req, res)=>{
        res.set('content-type','application/json')
    //mime types
    res.status(200)                       //codigo de estado
    res.end(`{
        "materia 1" :"base de datos"
        "materia 2" :"analisis de sistemas"
        "materia 3" :"aplicaciones web"
        "materia 4" :"practica ll"
        
        }`)               //cuerpo_contenido
})


app.get('/salame',(req, res)=>{
    res.status(304)
    res.end('vamos a un baile?')
})


app.post('/',(req, res)=>{
    res.set('content-type','application/json')
    res.end('{"materia":"AW2"}')
})


//abrir un puerto 
app.listen(PUERTO, ()=>{
    console.log(`servidor corriendo en http://localhost:${PUERTO}`)
})


