const userModel = require('../models/userModels')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

//  /api/users/me
// get user data
const getUserData = async (req, res) => {
    const getUserList = await userModel.find()
    res.status(200).json(getUserList)
}

//  /api/users/register
// register user authenticate
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        res.status(400);
        throw new Error('Please complete the input field')
    }

    //check if user exist
    const userExist = await userModel.findOne({ email })
    if (userExist) {
        res.status(400)
        throw new Error('User is already exist')
    }
    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(password, salt)

    const createUser = userModel.create({
        username: req.body.username,
        email: req.body.email,
        password: hashPass
    })

    if (createUser) {
        res.status(201).json(
            {
                message: 'Account Created',
                _id: req.body._id,
                username: req.body.username,
                email: req.body.email,
            }
        )
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }

}




//  /api/users/login
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const findUser = await userModel.findOne({ email })

    if (findUser && (await bcrypt.compare(password, findUser.password))) {
        res.status(200).json({ message: 'Sucessfully Login' })
    }
}

module.exports = {
    registerUser,
    getUserData,
    loginUser
}