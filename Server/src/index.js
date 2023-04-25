const http = require("http");
const getCharById = require("./controllers/getCharById");

const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log("URL: " + req.url);
    try {
      const { url } = req;
      if(url.includes("/rickandmorty/character")) {
        const id = parseInt(url.split("/").at(-1));
        getCharById(res, id)
      }
    }
   catch (error){
    throw new Error(error)
  }
})
.listen(PORT, "localhost");
