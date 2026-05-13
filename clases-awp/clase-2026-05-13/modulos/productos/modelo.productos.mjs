import productos from "../../productos.mjs";


export function obtenerTodos() {
    /*haria una consulta a una base de datos  */

    return productos.datos // <--- retorna arreglo
}

export function obtenerUno(id) {
    const productosFiltrados = productos.datos.filter((producto) => {
        return Number(producto.id) === id
    })

    return productosFiltrados // <--- retorna arreglo

}