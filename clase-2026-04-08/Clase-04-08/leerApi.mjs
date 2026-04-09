// leer una api
try{
    //hacer una peticion con FETCH con --> promesas 
    const respuesta = await fetch ('https://jsonplaceholder.typicode.com/todos/1')
    // extraemos del cuerpo de la peticion de datos 
    const productos = await respuesta.json()
    console.log(productos)
}
catch(e){
    consele.log(e)

}
//https://69cbcb780b417a19e07b42c1.mockapi.io/api/v1/Productos

