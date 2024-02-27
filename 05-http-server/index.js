import { createServer } from "http"

const httpServer = createServer((req, res) => {
  console.log('Petición recibida')
  res.end('Hola mundo')
})

httpServer.listen(4500, () => console.log('Servidor lanzado en el puerto 4500'))

/*
const httpServer = createServer((req, res) => {
  let data = "";
  let countChunk = 0;
  req.on("data", (chunk) => {
    data += chunk;
    countChunk++;
    console.log(countChunk);
  });
  req.on("end", () => {
    res.end("Recibido");
  });
});

httpServer.listen(5000); */
