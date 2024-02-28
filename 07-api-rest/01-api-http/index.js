import { createRequire } from "module"
const require = createRequire(import.meta.url)
const movies = require('./movies.json')
import expressApp, { json } from 'express'
import 'dotenv/config'
const app = expressApp()

const PORT = process.env.PORT ?? 3000

app.disable('x-powered-by')
app.use(json)

app.get('/movies', (req, res) => {
    res.json(movies)
})

app.listen(PORT, () => console.log(`Servidor lanzado en http://localhost:${PORT}`))
