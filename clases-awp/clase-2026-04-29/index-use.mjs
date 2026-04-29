import express from 'express'

const PUERTO = 3000

const app = express()


function middlewares1(req, res, next) {
    console.log('middleware 1')
    next()  // <----- seguir la pila de ejecucción 
}

// La ruta del use sirve como prefijo /----
app.use(middlewares1)


app.get('/', (req, res) => {
    console.log('ejecucion del callback final')
    res.send('Hola')
})

app.get('/saludo', (req, res) => {
    console.log('ejecucion del callback final con saludo')
    res.send('Hola ruta /saludo')
})


app.listen(PUERTO, () => {
    console.log(`http://localhost:${PUERTO}`)
})

