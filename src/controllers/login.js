const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { email, password } = req.query;
  if (!email || !password) {
    return res.status(400).json({ message: "Faltan datos" });
  }
  try {
    const user = await User.findOne({ where: { email: email }});
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    return user.password  === password 
    ? res.status(200).json({ access : true }) 
    : res.status(403).json({ message: "Contraseña incorrecta" });
    // const match = await user.comparePassword(password);
    // if (!match) res.status(403).json({ message: "Contraseña incorrecta" });
    // return res.status(200).json({ access: true });
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

module.exports = login;