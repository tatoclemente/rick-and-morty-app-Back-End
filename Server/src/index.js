const server = require('./app');
const { conn } = require('./DB_connection');
require('dotenv').config();


const PORT = process.env.PORT || 3001;

// server.listen(PORT, async () =>{
//   console.log("Server raised in port: " + PORT)
//   await conn.sync({ alter: true })
//   })

conn.sync({ alter: true })
.then(() => {
  server.listen(PORT, () =>{
    console.log("Server raised in port: " + PORT)
    })
})
.catch((error) => {
  console.log(error.message);
})
