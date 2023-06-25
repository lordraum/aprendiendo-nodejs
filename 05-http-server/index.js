import { createServer } from "http";

const httpServer = createServer((req, res) => {
  console.log("Petición recibida en el puerto 5000");
  res.end("<h1>Hello World</h1>");
});

httpServer.listen(5000);
