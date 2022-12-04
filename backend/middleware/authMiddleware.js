const jwt = require('jsonwebtoken');
const User = require('../models/userModels')

const protect = async (req, res, next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //Get Token
            token = req.headers.authorization.split(' ')[1];

            //Verify Token
            const decode = jwt.verify(token, process.env.JWT_SECRET)

            // Get user data based on token
            req.user = await User.findById(decode.id).select('-password')

            next();
        } catch (error) {
            res.status(401)
            res.send({ message: "Not authorized" })
        }
    }
    if (!token) {
        res.status(401)
        res.send({ message: "Not authorized" })
    }
}

module.exports = {
    protect
}