// import express from 'express'
import { Router } from 'express'
import * as controlador from './controlador.productos.mjs'

//instacioamos router -> es como una ramma express
//const rutasProductos = new express.Router() 
const rutasProductos = new Router()


rutasProductos.get('/api/v1/productos', controlador.obtenerTodos)
rutasProductos.get('/api/v1/productos/:id', controlador.obtenerUno)
rutasProductos.delete('/api/v1/productos/:id', controlador.eliminarUno)

export default rutasProductos 