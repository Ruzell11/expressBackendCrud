const userModel = require('../models/userModels')

const getUserData = async (req, res) => {
    res.json({ message: 'Get User' })
}
const registerUser = async (req, res) => {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
        res.status(400);
        throw new Error('Please complete the input field')
    }
    res.status(200).json({ message: 'Sucessfully Register the user' })
}

module.exports = {
    registerUser,
    getUserData
}