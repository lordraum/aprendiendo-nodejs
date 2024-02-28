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





