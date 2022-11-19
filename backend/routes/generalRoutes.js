const router = require('express').Router();
const {getData , addData ,updateData , deleteData} = require('../controller/generalController');

router.get('/api/data' , getData )
router.post('/api/data' , addData)
router.put('/api/data/:id' , updateData )
router.delete('/api/data/:id' , deleteData)



module.exports = router;