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

app.use((req, res) => {
  res.status(404).send('<h1>404 not found</h1>')
})

app.listen(PORT, () => console.log(`Servidor lanzado en http://localhost:${PORT}`))

