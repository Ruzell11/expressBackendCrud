const ItemModel = require('../models/generalModels')

const getData = async (req, res) => {
    const getItem = await ItemModel.find()
    res.status(200).json(getItem)
}
const addData = async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text on input field')
    }
    const setData = ItemModel.create({
        text: req.body.text
    })
    res.status(200).json(setData)
}

const updateData = async (req, res) => {
    res.status(200).json({ message: 'Update Item' })
}
const deleteData = async (req, res) => {
    res.status(200).json({ message: 'Delete Item' })
}


module.exports = {
    getData,
    addData,
    updateData,
    deleteData
}