// npm i -D nodemon --> "devDependencies": {
//"nodemon": "^3.1.14"

import express from 'express'
import * as controlador from './modulos/productos/controlador.productos.mjs'


/* import productos from './productos.mjs'*/


const PUERTO = 3000
const app = express()  //inicializa el express y lo guarda en la constante app

app.get('/api/v1/productos', controlador.obtenerTodos)
app.get('/api/v1/productos/:id', controlador.obtenerUno)

app.listen(PUERTO)
