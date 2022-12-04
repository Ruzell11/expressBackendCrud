const router = require('express').Router();
const { getData, addData, updateData, deleteData } = require('../controller/generalController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getData)
router.post('/', protect, addData)
router.put('/:id', protect, updateData)
router.delete('/:id', protect, deleteData)



module.exports = router;