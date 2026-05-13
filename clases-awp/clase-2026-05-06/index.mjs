import express from 'express'
import { obtenerProductos, obtenerProductosPorId, eliminarProducto, añadirProductos } from './funciones.mjs'


const PUERTO = 3000


const app = express()
app.use(express.json())

//configuracion de una API REST

//GET /api/v1/productos
app.get('/api/v1/productos', obtenerProductos)

//GET /api/v1/productos/:id
app.get('/api/v1/productos/:id', obtenerProductosPorId)

//POST /api/v1/productos ----> damos de alta registro 
app.post('/api/v1/productos', añadirProductos)

//PUT /api/v1/productos/:id ----> modificar registro


//DELETE /api/v1/productos/:id ----> eliminar registro 
app.delete('/api/v1/productos:id', eliminarProducto)



app.listen(PUERTO)