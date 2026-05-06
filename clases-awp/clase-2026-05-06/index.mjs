import express from 'express'
import { obetenerProductos,obetenerProductosPorId } from './funciones.mjs'


const PUERTO = 3000

const app = express()

//CONFIGURACION DE UNA API 

//GET  /api/v1/productos
app.get('/api/v1/productos', obetenerProductos)

//GET /api/v1/productos/:id

app.get('/api/v1/productos/:id', obetenerProductosPorId)


//POST /api/v1/productos/---> damos de alta un registro

//PUT /api/v1/productos/:id  -----> modificar un registro

//DELETE  /api/v1/productos/:id  ---->eliminar un registro
app.delete('./api/v1/')

app.listen(PUERTO)

