import createServer, { json } from 'express'
const app = createServer()
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
import 'dotenv/config'
import crypto from 'node:crypto'

app.disable('x-powered-by')

const movies = require('./movies.json')
const PORT = process.env.PORT ?? 1234

app.use(json())

// List All
app.get('/movies', (req, res) => {
  res.json(movies)
})

// Get by id
app.get('/movies/:id', (req, res) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.id === id)
  return !movie
    ? res.status(400).json({ message: 'movie not found' })
    : res.json(movie)
})

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

//Patch
app.patch('/movies/:id', (req, res) => {

  const updateFields = (req.body)
  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)

  
  if (movieIndex === -1) {
    res.status(404).json({ error: "Película no encontrada" });
  }
  
  const updateMovie = {
    ...movies[movieIndex],
    ...updateFields
  }

  movies[movieIndex] = updateMovie

  res.json(updateMovie)
})

// Patch utilizando find en lugar de findindex y Object. assign en lugar del spread operator()
/* app.patch('/movies/:id', (req, res) => {
  const id = req.params.id;
  const updatedFields = req.body;

  // Encuentra la película por su ID
  const movieToUpdate = movies.find(movie => movie.id === id);

  if (movieToUpdate) {
    // Actualiza los campos de la película con los nuevos valores
    Object.assign(movieToUpdate, updatedFields);
    res.status(200).json(movieToUpdate);
  } else {
    res.status(404).json({ error: 'Película no encontrada' });
  }
}) */

// Delete

app.delete('/movies/:id', (req, res) => {
  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' })
  }

  movies.splice(movieIndex, 1)
  return res.json([{ message: 'Movie deleted' }, movies])
})


app.use((req, res) => {
  res.status(404).send('<h1>404 not found</h1>')
})

app.listen(PORT, () => console.log(`Servidor lanzado en http://localhost:${PORT}`))

