// leer una api
import fsp from 'node:fs/promises'
import path from 'node:path'



try{
    //hacer una peticion con FETCH con --> promesas 
    const respuesta = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
    // extraemos del cuerpo de la peticion de datos 
    const productos = await respuesta.json()
    
    //creamos ka ruta
    //const ruta = path.join('.','texto.txt')
    const ruta = path.join('./api.json')
    const contenido = JSON.stringify(productos, null, 4) //pasa de js a forma json -> texto
    await fsp.writeFile(ruta, contenido )
    //console.log(productos)
}
catch(e){
    consele.log(e)

}
//https://69cbcb780b417a19e07b42c1.mockapi.io/api/v1/Productos
