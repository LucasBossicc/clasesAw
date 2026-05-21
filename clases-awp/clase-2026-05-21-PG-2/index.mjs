//docker hub es un repositorio de imagenes tiene un S.O + postgreSQL
// el from descarga laimagen y ultima version 

import express from 'express'
import rutasProductos from './modulos/productos/rutas.productos.mjs'

const PUERTO = 3000
const app = express()  //inicializa el express y lo guarda en la constante app


app.use(rutasProductos)

app.listen(PUERTO)
