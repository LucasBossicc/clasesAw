// usuario ---> humano
// cliente ---> software ---> http
//dos verbos ---> post - get

//modulo http 

import http from 'node:http';
import path from 'node:path';
import fsp from 'node:fs/promises';

const app = http.createServer(async (peticion, respuesta) => {
    if (peticion.method === 'GET') {
        if (peticion.url === '/') {
            respuesta.statusCode = 200
            return respuesta.end('estas en el inicio')
        }
        if (peticion.url === '/usuarios') { 
            try {
                const respuestaApi = await fetch('https://api.escuelajs.co/api/v1/users')
                const datosApi = await respuestaApi.text()
                await fsp.writeFile(path.join('./datosapi.json'), datosApi)
                respuesta.statusCode = 201
                respuesta.setHeader('content-type', 'application/json')
                return respuesta.end(datosApi)
            } catch (error) {
                respuesta.statusCode = 500
                return respuesta.end('Error En El Servidor')
            }
        }

        respuesta.statusCode = 404
        respuesta.end('recurso no encontrado')
    }

})
app.listen(3000, () => {
    console.log('servidor corriendo en http://localhost:3000')
})