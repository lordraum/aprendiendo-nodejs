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

