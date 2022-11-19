const getData = async(req , res) => {
    res.status(200).json({message:'Get Item'})
}
const addData = async(req , res) => {
   if(!req.body.text){
    res.status(400)
    throw new Error('Please add a text on input field')
   }
    res.status(200).json({message:'Add Item'})
}
const updateData = async(req , res) => {
    res.status(200).json({message:'Update Item'})
}
const deleteData = async(req ,res) => {
    res.status(200).json({message:'Delete Item'})
}


module.exports = {
    getData,
    addData,
    updateData,
    deleteData
}