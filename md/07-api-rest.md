# API REST

Conjunto de reglas que facilitan la comunicación de sistemas a través de HTTP y sus verbos, sin utilizar estado, es decir, que en cada solicitud está la información necesaria para comprenderla y procesarla.

## Características de una API REST

### Recursos

Cada recurso se identifica con una URL.

### Verbos HTTP

Definen las operaciones que se pueden hacer con los recursos.

### Separación de conceptos

Autonomía entre cliente y servidor, de esta forma evolucionan independientemente.

### Representaciones

El cliente podrá decidir en que formato recibirá la información.

### Sin estado

El cliente debe enviar toda la infromación necesaria para procesar la respuesta.

## Request Params

Especificar en el path --> `app.get('/movies/:id', (req, res)...`

Acceder --> `const { id } = req.params`

```js
app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  return !movie
    ? res.status(400).json({ message: 'movie not found' })
    : res.json(movie)
})
```

### Error CORS

Es el qué sucede cuando se intenta acceder desde uan url que no es la misma del servidor, para solucionarlo se utiliza la librería `cors`. Ejemplo en `recursos-tips.md`

## Solicitud post

- Acceder a la data de req.body
- Recopilar la data de req.body + la data adicional (Ej --> id)
- Enviar

