import { createServer } from "http";

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

httpServer.listen(5000);
