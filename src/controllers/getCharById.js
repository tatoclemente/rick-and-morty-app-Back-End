const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (id) => {
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
    return character
};

module.exports = getCharById