const ItemModel = require('../models/generalModels')


const getData = async (req, res) => {
    const getItem = await ItemModel.find()
    res.status(200).json(getItem)
}

const addData = async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        res.send({ message: 'Please add a text on input field' })
    }
    const setData = await ItemModel.create({
        text: req.body.text
    })
    res.status(200).json(setData)
}

const updateData = async (req, res) => {
    const data = await ItemModel.findById(req.params.id)
    if (!data) {
        res.status(400)
        res.send({ message: 'Data not found' })
    }

    const updatedGoal = await ItemModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedGoal)
}
const deleteData = async (req, res) => {
    const data = await ItemModel.findById(req.params.id)
    if (!data) {
        res.status(400);
        res.send({ message: 'Data not found' })
    }

    await data.remove()
    res.status(200).json({ id: req.params.id })
}


module.exports = {
    getData,
    addData,
    updateData,
    deleteData
}