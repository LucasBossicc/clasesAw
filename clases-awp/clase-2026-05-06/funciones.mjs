import productos from "./productos.mjs"

export function obtenerProductos(req, res) {
    res.json(productos)
}

export function obtenerProductosPorId(req, res) {
    //logica extra
    const id_producto = Number(req.params.id) // -> verificar si es un numero
    //const id_producto = parseInt(req.params.id) // -> 123abc -> 123
    //filtramos
    const productosFiltrados = productos.filter((producto) => {
        return id_producto === Number(producto.id) // -> verdadero pasa, falso no pasa
    })

    //logica verificar si hay de ese producto 
    if (productosFiltrados.length > 0) {
        res.json(productosFiltrados)

    } else {
        const respuesta = {
            mensaje: 'Producto no encontrado'
        }
        res.status(404).json(respuesta)
    }



    res.json(producto)
}

export function añadirProductos(req, res) {

    const nuevoProducto = req.body
    productos.push(nuevoProducto)
    const respuesta = {
        mensaje: 'Producto dado de alta'
    }
    res.json(respuesta)
}


export function eliminarProducto(req, res) {
    //logica extra
    const id_producto = Number(req.params.id) // -> verificar si es un numero
    //const id_producto = parseInt(req.params.id) // -> 123abc -> 123

    //filtramos
    const productosFiltrados = productos.filter((producto) => {
        return id_producto !== Number(producto.id) // -> verdadero pasa, falso no pasa
    })

    productos.length = 0 // --> ponemos en 0 
    productos.push(...productosFiltrados)

    const respuesta = {
        mensaje: 'Producto eliminado'
    }
    res.json(respuesta)

}