# Apuntes nodejs

## Objeto global

Es el objeto global en todos los entornos de ejecución JS

`console.log(globalThis)`

## Common JS

Exportar

```js
module.exports = { suma, producto };
module.exports = resta;
```

Importar

```js
const { suma, producto } = require("./operaciones");
const resta = require("./resta");
```

## ESM Modules

Exportar

```js
export function printName(user) {
  console.log(user.name);
}

export default User;
```

Importar

```js
import { sum, sub, mult } from "./sum.mjs";
```

Establecer en package.json ESM

```js
  "main": "main.js",
  "type": "module", // ESM
  "scripts": ...
```

### Operar entre CJS y EMS

Utilizar las extensiones de archivo propias de cada módulo --> .cjs para CJS y .mjs para ESM.

### Importar JSON y módulos CJS en EMS

```js
import { createRequire } from "module"
const require = createRequire(import.meta.url)
const myDataJSON = require("data.json")

const oldModule = require("/cjs-module")
```

## HTTP Server

Importar módulo. Los módulos nativos en node se deben importar con el prefijo `node:`

`const http = require('node:http')`

Crear servidor servidor HTTP

```js
// Establecer petición
const httpServer = createServer((req, res) => {
  console.log("Petición recibida");
  res.end("Hola mundo");
});

// Lanzar servidor
httpServer.listen(4500, () =>
  console.log("Servidor lanzado en el puerto 4500")
);
```

## Chunk de datos

Ejemplo en `/05-http-server`
