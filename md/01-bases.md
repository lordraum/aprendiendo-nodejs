# Bases

## Global
Es el objeto principal (padre) de nodejs, es como el objeto window en el navegador.

`console.log(global)`

### Process
Objeto que contiene toda la información de los procesos, es el entorno de ejecucuón de nodejs.

- process.exit() => Cierra el proceso
- process.env => Accede a variables de entorno
- dirname, filename => variables especiales para obtener información sobre la ruta
    - __dirname => Ruta absoluta del directorio del archivo actual
    - __filename => ruta absoluta archivo actual

## Módulos

Conjunto de partes del código (archivos, carpetas) que se pueden conectar entre sí.

### Sistema de módulos

Brinda herramientas para encapsular, conectar y reutilizar archivos.

En node se puede utilizar dos sistemas
    - Common JS => sistema x defecto de nodejs
    - ES Modules => Oficial de JS y el navegador

## Common JS

### Exportar módulo

```js
const suma = (a, b) => a + b;
const producto = (a, b) => a * b;

module.exports = { suma, producto };
```

### Importar módulo

```js
// Se puede con destructuring para obtener las propiedades por separado, o todo el módulo.

const { suma, producto } = require("./operaciones");
const numbers = [3, 5];

const sumResult = suma(...numbers);
const productResult = producto(...numbers);
```

### Importar JSON
- Common js transforma la data JSON en objeto.

```json
// users.json
{
    "users": [
        {
            "nombre": "Jose", "canal": "Desarrollo útil"
        },
        {
            "nombre": "Pablo", "canal": "Desarrollo útil"
        }
    ]
}
```

```js
// main.js
const users = require("./users.json");
console.log(users);
//output
{
  users: [
    { nombre: 'Jose', canal: 'Desarrollo útil' },
    { nombre: 'Pablo', canal: 'Desarrollo útil' }
  ]
}
```
## ES Modules
Para utilizarlos se debe añadir la propiedad `type:module` debajo de la propiedad main en package.json y en el html en la etiqueta script src.

### export default

```js
//users.js => Exportar
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export default User;

//main.js => Importar
import User from "./users.js";
const Fernando = new User("Fernando", "40");
```

### export
```js
//users.js => Exportar
export function printName(user) {
  console.log(user.name);
}

export function printAge(user) {
  console.log(user.age);
}

//main.js => Importar
import { printAge, printName } from "./users.js";
```
### alias

```js
import U, { printAge as prt_age, printName } from "./users.js";
const Fernando = new U("Fernando", "40");

prt_age(Fernando);
printName(Fernando);
```