import createExpressServer from 'express'

const app = createExpressServer()

app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.listen('3001', () => console.log('Servidor lanzado en el puerto 3001'))
