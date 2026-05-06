import productos from "./productos.mjs";

export function obetenerProductos(req , res) {
    res.json(productos)
}


export function obetenerProductosPorId(req, res) {
    // logica extra
    const id_producto = Number(req.params.id) // -> verificar si es un numero -> cast
    // filtramos
    const productosFiltrados = productos.filter((producto) => {
        return id_producto === Number(producto.id) // devuielve verd o falso 
    })


    // logica para verificar si hay productos
    if (productosFiltrados.length > 0) {
        res.json(productosFiltrados)
    }
    else {
        const respuesta = {
            mensaje: 'producto no encontado'
        }
        res.status(404).json(respuesta)

    }
    

}