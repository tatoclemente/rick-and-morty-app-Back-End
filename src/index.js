const server = require('./app');
const { conn } = require('./DB_connection');
require('dotenv').config();


const port = process.env.PORT || 3001;

conn.sync({ alter: true })
.then(() => {
  server.listen(port, () =>{
    console.log("Server raised in port: " + port)
    })
})
.catch((error) => {
  console.log(error.message);
})
