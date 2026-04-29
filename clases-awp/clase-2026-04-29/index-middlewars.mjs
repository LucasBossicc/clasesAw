import express from 'express'

const PUERTO = 3000

const app = express()

// middlewares
function middlewares1(req, res, next){
    console.log('middleware 1')
    const existeUsuario = true
    if(existeUsuario){
        console.log('usuario existe -> pasa ')
        return next() // <----- seguir la pila de ejecucción 
    }
    console.log('usuario no existe -> no pasa')
    res.status(403).send('usuario no registrado')

}

/* function middlewares2(req, res, next){
    console.log('middleware 2')
    next()  // <----- seguir la pila de ejecucción 
}
 */

app.get('/',  middlewares1, (req, res)=> {
    console.log('ejecucion del callback final')
    res.send('Hola')
})




app.listen(PUERTO, ()=>{
    console.log(`http://localhost:${PUERTO}`)
})

