import createServer, { json } from 'express'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const app = createServer()
const PORT = '3000'
const dataJSON = require('./data.json')

app.use(json())

app.get('/data', (req, res) => {
  res.json(dataJSON)
})

app.post('/adduser', (req, res) => {
  const { name, age } = req.body
  console.log(name, age)
  res.status(201).send('Registro creado')
})

app.use((req, res) => {
  res.status(404).send('<h1>404 not found</h1>')
})

app.listen(PORT, () => console.log(`Servidor lanzado en http://localhost:${PORT}`))
