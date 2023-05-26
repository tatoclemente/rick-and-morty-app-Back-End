const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, status, species, gender, origin, image, id } = req.body;
  
  try {
    if ( !name || !status || !species || !gender || !origin || !image){
      return res.status(401).json({ message: "Faltan datos" });
    }
   await Favorite.create({ name, status, species, gender, origin, image, id })


// User.addFavorites()
  const favorites = await Favorite.findAll();
  return res.status(200).json(favorites);
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
};

module.exports = postFav;