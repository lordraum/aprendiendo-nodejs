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

