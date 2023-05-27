const { User } = require('../DB_connection');

const postUser = async (req, res) => {
    const { email, password } = req.body;
  
    if(!email || !password) {
        return res.status(400).send('Faltan datos');
    }
    try {
        const [user, created] = await User.findOrCreate({
            where: { email: email, password: password }
        })
        if(created === false) {
        return res.status(200).json({message: "El email ya existe"})
        } 
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = postUser