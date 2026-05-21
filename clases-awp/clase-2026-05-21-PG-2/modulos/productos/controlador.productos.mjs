import * as modelo from './modelo.productos.mjs'
import * as vista from './vista.productos.mjs'

//modelo es un espacio de nombres 

export async function obtenerTodos(req, res) {
    // controlador se encarga de orquestar 
    const datosProductos = await modelo.obtenerTodos()  // <--- datos.completos
    const respuestaVista = vista.obtenerTodos(datosProductos) // <--- arreglo 
    //tener criterio de los datos a mandar 
    res.json(datosProductos)

}

export async function obtenerUno(req, res) {
    const idProductos = Number(req.params.id)
    const datosProductos = await modelo.obtenerUno(idProductos) // <--- retorna arreglo
    const resultado = vista.obtenerUno(datosProductos) // <--- retorna arreglo
    // si hay o no productos y responder en consecuencia 
    if (resultado.length > 0) {
        res.json(resultado)
    }
    else {
        res.status(404).json({ mensaje: `Producto con id ${idProductos} no encortado` })
    }

}

export async function eliminarUno(req, res) {
    const idProductos = Number(req.params.id)
    const datosProductos = await modelo.eliminarUno(idProductos) // <--- retorna arreglo
    const resultado = vista.eliminarUno(datosProductos) // <--- retorna arreglo
    // si hay o no productos y responder en consecuencia 
    if (resultado.length > 0) {
        res.json(resultado)
    }
    else {
        res.status(404).json({ mensaje: `Producto con id ${idProductos} no encortado` })
    }

}
    
