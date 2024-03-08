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

Es el qué sucede cuando se intenta acceder desde uan url que no es la misma del servidor, para solucionarlo se utiliza la librería `cors`.

## Solicitud post

- Acceder a la data de req.body
- Recopilar la data de req.body + la data adicional (Ej --> id)
- Enviar

```js
app.post('/movies', (req, res) => {
 const {
  title,
  genre,
  year,
  duration,
  rate,
  poster 
 } = req.body

 const newMovie = {
  id: crypto.randomUUID(),
  title,
  genre,
  year,
  duration,
  // Dato opcional
  rate: rate ?? 0,
  poster
 }

 // Esto no es REST porque guarda el estado en la API
 movies.push(newMovie)
 res.status(201).json(newMovie)
})
```

## PATCH
- Se accede a los campos actualizados con req.body
- Si el id está como parámetro se accede por medio de req.params
- Encontrar con find() o findIndex() el registro a actualizar según id (en este caso).
- Evaluar si se encuentra el registro
- Reemplazar (asignar) campos actualizados en registro --> por medio de spreas operator o Objects.assign()
- Enviar data en formato JSON

```js
app.patch('/movies/:id', (req, res) => {

  const updateFields = (req.body)
  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)

  
  if (movieIndex === -1) {
    res.status(404).json({ error: 'Película no encontrada' });
  }
  
  const updateMovie = {
    ...movies[movieIndex],
    ...updateFields
  }

  movies[movieIndex] = updateMovie

  res.json(updateMovie)
})

/*
// find en lugar findIndex
const movieToUpdate = movies.find(movie => movie.id === id)

// Object.assign en lugar del spread operator
Object.assign(movieToUpdate, updatedFields)
    res.status(200).json(movieToUpdate)
*/
```



