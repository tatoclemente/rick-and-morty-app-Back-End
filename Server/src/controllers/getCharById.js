const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  const { id } = req.params
  try {
      const {data} = await axios.get(URL + id);
      const character = {
              id: data.id,
              name: data.name,
              gender: data.gender,
              species: data.species,
              origin: data.origin,
              image: data.image,
              status: data.status,
            }
          if(character){
            res.status(200).json(character)
          } else {
            res.status(404).send('Not found')
          }
  }catch (error) {
      res.status(500).send(error.message)
  } 
}
module.exports = getCharById;

// const { id } = req.params
// axios
//   .get(URL + id)
//   .then((response) => {
//     const { id, name, gender, species, origin, image, status } = data;
//     const character = {
//       id,
//       name,
//       gender,
//       species,
//       origin,
//       image,
//       status,
//     }
//     if(character){
//       res.status(200).json(character)
//     } else {
//       res.status(404).send('Not fount')
//     }
//   })
//   .catch((error) => {
//     res.status(500).send(error.message)
//   });