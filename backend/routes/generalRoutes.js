const router = require('express').Router();
const { getData, addData, updateData, deleteData } = require('../controller/generalController');

router.get('/', getData)
router.post('/', addData)
router.put('/:id', updateData)
router.delete('/:id', deleteData)



module.exports = router;