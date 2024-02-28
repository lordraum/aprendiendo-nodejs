# Express

Framework http de nodejs

## Instaciar express

```js
import express from "express";
// Se puede utilizar cualquier nombre

app.disable('x-powered-by') // Deshabilita los créditos de express en la web

const app = express();
```

## Servidor Express básico

- Método --> .get .post .update, etc
- Parámetros
  - Path (endpoint)
  - Request, Response (req, res)
    - req.send --> lo que se envia al cliente.
- Método .listen()
- Parámetros
  - PORT
  - cb

```js
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen("3001", () => console.log("Servidor lanzado en el puerto 3001"));
```

## Middlewares

Parte de la aplicación que se encarga de conectar los bloques de la misma, realizando acciones previas al envío de las respuestas. Tienen acceso a `(req, res)`

### app.use()

Método que añade un middleware a la aplicación

### next

Instrucción que finaliza el actual middleware y pasa al siguiente.

```js
app.use((req, res, next) => {
  // For example, a GET request to `/test` will print "GET /test"
  console.log(`${req.method} ${req.url}`);

  next();
});
```

### app.json()

Middleware que parsea JSON -->

```js
import createServer, { json } from "express";
app.use(json());
```

## GET

```js
app.get("/data", (req, res) => {
  res.json(dataJSON)
})
```

## POST

### body --> req.body

Info o data que se recibe del cliente.

### res.status()

Establece el status de la respuesta, se puede encadenar con el método `.send('string')` --> En general los métodos de la respuesta se pueden encadenar.

![status code list](./status-code-list.png)

```js
app.post('/adduser', (req, res) => {
  const { name, age } = req.body
  console.log(name, age) // Hacer algo con la info
  res.status(201).send('Registro creado')
})
```

### Error 404 not found

Es el que se establece cuando no existe el path (recurso solicitado), se coloca al final, antes del listen.

```js
app.use((req, res) => {
  res.status(404).send('<h1>404 not found</h1>')
})
```

