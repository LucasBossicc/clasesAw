import * as modelo from './modelo.productos.mjs'

//modelo es un espacio de nombres 

export function obtenerTodos(req, res) {
    const datosProductos = modelo.obtenerTodos()  // <--- retorna arreglo
    //tener criterio de los datos a mandar 
    res.json(datosProductos)

}

export function obtenerUno(req, res) {
    const idProductos = Number(req.params.id)
    const datosProductos = modelo.obtenerUno(idProductos) // <--- retorna arreglo
    // si hay o no productos y responder en consecuencia 
    if (datosProductos.length > 0) {
        res.json(datosProductos)
    }
    else {
        res.status(404).json({ mensaje: `Producto con id ${idProductos} no encortado` })
    }

}
