# HTTP Server

## Nodemon
- Recarga la terminal cada vez que se hace un cambio.
- Iniciar npm, utilizar EMS como sistema.
- `npm i -E -D nodemon`
- Agregar como dependencia de desarrollo
    - `"dev": "nodemon index.js"`
    - npm run dev

## Crear servidor HTTP

- Importar http
- Método createServer()
    - Crea un servidor => instanciar en constante /httpServer/
- metodo /httpServer/.listen => Escucha el evento (lanza el servidor)

```js
import { createServer } from "http";

const httpServer = createServer((req, res) => {
  console.log("Petición recibida en el puerto 5000");
  res.end("<h1>Hello World</h1>");
});
httpServer.listen(5000);
```

## Petición y respuesta
- Parámetros (req, res) => manejan la petición y la respuesta
  - res.end() => Devuelve la respuesta

## Trabajar con el Verbo o Método de la petición.
- req.method

```js
// Ejemplo para obtener el método
const httpServer = createServer((req, res) => {
  const requestMethod = req.method;
  console.log(`Petición ${requestMethod} recibida el PATH es igual a ${req.u}`);
  res.end(`<h1>Respondiendo a ${requestMethod} request</h1>`);
});
```
## Path
- req.url => devuelve el path de la petición

```js
const requestPath = req.url;
  console.log(`El path de la petición es: ${requestPath}`);
```

## Headers
- req.headers
  - En la solicitud se envía en formato JSON

```js
 const requestHeaders = req.headers;
  console.log(`Authorization: ${requestHeaders.authorization}
  `);
  // Acceder a todos los encabezados
  console.log({ ...requestHeaders })
  // autorization es un tipo de encabezado (header) HTTP
```

## Body
- Stream de datos => el body se recibe en `chunks` => fragmentos
- req.on() => Método de nodejs que en este caso se utiliza para manejar los eventos del body
- Obtener `chunk`
  - req.on('data', (chunk) => //)
- Establecer que hacer cuando finaliza el evento
  - req.on('end', cb)
- También existe el evento 'error'

```js
const httpServer = createServer((req, res) => {
  let data = "";
  let countChunk = 0;
  // Recibiendo la data en fragmentos
  req.on("data", (chunk) => {
    data += chunk;
    countChunk++;
    console.log(countChunk);
  });
  // Evento end para finalizar la petición después de que haya terminado la recepción de toda la data 
  req.on("end", () => {
    res.end("Recibido");
  });
  // valor de countChunk al enviar desde el cliente un header con texto de 10000 palabras => 4
});
```





