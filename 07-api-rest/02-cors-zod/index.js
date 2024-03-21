import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import movies from './movies.json'
import { validateMovie } from './schemas/movies.js'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT ?? 3000
const ACCEPTED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:1234',
  'https://movies.com',
  'https://midu.dev'
]

app.disable('x-powered-by')
app.use(express.json())

// CORS middleware
app.use(cors({
  origin: (origin, callback) => {
    if (ACCEPTED_ORIGINS.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
}))

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
