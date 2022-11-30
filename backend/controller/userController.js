const userModel = require('../models/userModels')

const getUserData = async (req, res) => {
    const getUserList = await userModel.find()
    res.status(200).json(getUserList)
}
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400);
        throw new Error('Please complete the input field')
    }
    const createUser = userModel.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    res.status(200).json(createUser)
}

module.exports = {
    registerUser,
    getUserData
}