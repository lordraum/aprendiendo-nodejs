# Recursos, tips, trucos, etc, nodejs

## Librería Standard

Configuración para ESLINT

npm i standard -D -E

```json  
    "eslintConfig": {
    "extends": "standard"
  }
```

### Configuración settings.json VsCode para standard eslint
```json
{
"editor.formatOnSave": true,
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2,
    "editor.suggest.insertMode": "replace",
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
}
```

## Librería cors

```js
const app = express()

app.use(cors({
  origin: (origin, callback) => {
    const ACCEPTED_ORIGINS = [
      URL_EXAMPLE_1,
      URL_EXAMPLE_2,
      URL_EXAMPLE_3
    ]

    if (ACCEPTED_ORIGINS.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
}))
```

## dotenv

Variables de entorno

```env
.env
PORT=3001
```

```js
// npm i -D -E dotenv

import 'dotenv/config'
const PORT = process.env.PORT
```
## Spread operator para reemplazr valores en objetos (patch)

```js
const nums1 = {
  a: 1,
  b: 2,
  c: 3
}

const nums2 = {
  a: 2, // Reemplaza el value de las propiedades ue coincidan en nums1 
}

const nums3 = {
  ...nums1,
  ...nums2
}

```

## DELETE

- Hallar registro, por media de una key (generalmente id), si se ha enviado como parámetro de la url, acceder por medio req.params
- Eliminar el registro de la lista utilizando splice()

```js
app.delete('/movies/:id', (req, res) => {
  const { id } = req.params
  const movieIndex = movies.findIndex(movie => movie.id === id)

  if (movieIndex === -1) {
    return res.status(404).json({ message: 'Movie not found' })
  }

  movies.splice(movieIndex, 1)
  return res.json([{ message: 'Movie deleted' }, movies])
})
```


