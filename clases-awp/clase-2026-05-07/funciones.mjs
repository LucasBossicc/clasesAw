import productos from "./productos.mjs"

export function obtenerProductos(req, res) {
    res.json(productos.datos)
}

export function obtenerProductosPorId(req, res) {
    //logica extra
    const id_producto = Number(req.params.id) // -> verificar si es un numero
    //const id_producto = parseInt(req.params.id) // -> 123abc -> 123
    //filtramos
    const productosFiltrados = productos.datos.filter((producto) => {
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
    const proximoId = productos.ultimoId + 1 //--> aumentamos el id para insertarlou


    //agregar propiedad id al nuevo producto
    nuevoProducto.id = proximoId.toString() // --> convertimos a string para mantener el mismo formato
    productos.ultimoId = proximoId // --> actualizamos el ultimo id


    productos.datos.push(nuevoProducto)
    const respuesta = {
        mensaje: 'Producto dado de alta'
    }
    res.json(respuesta)
}




export function modificarProducto(req, res) {
    const id_producto = Number(req.params.id) // -> verificar si es un numero
    const productoModificado = req.body

    productos.datos.forEach((producto, index) => {

        //const index = productos.datos.indexOf(producto) // --> obtenemos el indice del producto actual

        if (id_producto === Number(producto.id)) {
            productoModificado.id = producto.id // --> mantenemos el mismo id
            productos.datos[index] = productoModificado // --> modificamos el producto
        }

    })

    const respuesta = {
        mensaje: 'Producto modificado' + id_producto
    }
    res.json(respuesta)
}



export function eliminarProducto(req, res) {
    //logica extra
    const id_producto = Number(req.params.id) // -> verificar si es un numero
    //const id_producto = parseInt(req.params.id) // -> 123abc -> 123

    //filtramos
    const productosFiltrados = productos.datos.filter((producto) => {
        return id_producto !== Number(producto.id) // -> verdadero pasa, falso no pasa
    })

    productos.datos.length = 0 // --> ponemos en 0 
    productos.datos.push(...productosFiltrados)

    const respuesta = {
        mensaje: 'Producto eliminado'
    }
    res.json(respuesta)

}