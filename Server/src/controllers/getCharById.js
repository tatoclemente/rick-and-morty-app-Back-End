const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params
  axios
    .get(URL + id)
    .then((response) => {
      const { id, name, gender, species, origin, image, status } = response.data;
      const character = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      }
      if(character){
        res.status(200).json(character)
      } else {
        res.status(404).send('Not fount')
      }
    })
    .catch((error) => {
      res.status(500).send(error.message)
    });
};

module.exports = getCharById;
