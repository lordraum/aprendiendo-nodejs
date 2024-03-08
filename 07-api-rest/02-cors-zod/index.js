import express from 'express'
import { v4 as uuidv4 } from 'uuid' // Importamos solo la función v4 como uuidv4
import movies from './movies.json'
import { validateMovie } from './schemas/movies.mjs' // Agregamos la extensión mjs para importar módulos ES

const app = express()
const PORT = process.env.PORT ?? 3000

const ACCEPTED_ORIGINS = [
  'http://localhost:8080'
]

app.disable('x-powered-by')
app.use(express.json())

// CORS middleware
app.use((req, res, next) => {
  const origin = req.get('Origin')
  if (ACCEPTED_ORIGINS.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin)
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    res.header('Access-Control-Allow-Credentials', 'true')
  }
  next()
})

app.get('/movies', (req, res) => {
  const origin = req.header('origin')
  if (ACCEPTED_ORIGINS.includes(origin)) {
    // header que soluciona CORS
    res.header('Access-Control-Allow-Origin', origin)
  }
  res.json(movies)
})

app.post('/movies', (req, res) => {
  const result = validateMovie(req.body)
  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) })
  }

  const newMovie = {
    id: uuidv4(), // Utilizamos la función uuidv4 directamente
    ...result.data
  }

  movies.push(newMovie)
  res.status(201).json(newMovie)
})

app.delete('/movies/:id', (req, res) => {
  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' })
  }

  movies.splice(movieIndex, 1)
  return res.json({ message: 'Movie deleted' })
})

app.listen(PORT, () => console.log(`Aplicación lanzada en http://localhost:${PORT}`))
