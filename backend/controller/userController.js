const UserModel = require('../models/userModels')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

//  /api/users/me
// get user data
const getUserData = async (req, res) => {
    const getUserList = await UserModel.find()
    res.status(200).json(getUserList)
}

//  /api/users/register
// register user authenticate
const registerUser = async (req, res) => {
    const { username, email, password } = req.body

    if (!username || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if user exists
    const userExists = await UserModel.findOne({ email })

    if (userExists) {
        res.status(400)
        res.send({ message: 'User already exists' })
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await UserModel.create({
        username,
        email,
        password: hashedPassword,
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        res.send({ message: 'Invalid user data' })
    }
}



//  /api/users/login
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const findUser = await UserModel.findOne({ email })

    if (findUser && (await bcrypt.compare(password, findUser.password))) {
        res.status(200).json({ message: 'Sucessfully Login' })
    } else {
        res.status(400)
        res.send({ message: 'Invalid Credentials' })

    }
}

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',

    })
}
module.exports = {
    registerUser,
    getUserData,
    loginUser
}