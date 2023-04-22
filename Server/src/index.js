const http = require("http");
const data = require("./utils/data");

const PORT = 3001;

http
  .createServer((req, res) => {
    const { url } = req;
    console.log("URL:", url);
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (url === "/rickandmorty/character") {
      return res
      .writeHead(200, { 'Content-Type': 'text/plain'})
      .end(console.log("Esta OK"))
      }
      const id = parseInt(url.split("/").at(-1));
      console.log(id)
    if (url.includes('/character') && id) {
      const character = data.filter((char) => char.id === id);
      return res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify(character));
    }
  })
  .listen(PORT, "localhost");
