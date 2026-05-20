// para usar el api rest implementamos el mvc
// mvc --> modelo vista controlador
// modelo --> conecta los datos BD
// Vista --> lo que ve el usuario (json)
// contorolador --> conecta todo y responde al usuario
// todo para que sea escalable y tenga mantenivbilidad


//npx pnpm i
//npx permite correr sin instalarlos 

import express from 'express'
import rutasProductos from './modulos/productos/rutas.productos.mjs'

const PUERTO = 3000
const app = express()  //inicializa el express y lo guarda en la constante app


app.use(rutasProductos)

app.listen(PUERTO)
