
const getCharById = require("../controllers/getCharById");



const handlerCharById = async (req, res) => {
  const { id } = req.params;
  try {
    const character = await getCharById(id);
    if (character) {
      res.status(200).json(character);
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = handlerCharById;
