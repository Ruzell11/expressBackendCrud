const router = require('express').Router();
const { registerUser, getUserData } = require('../controller/userController');

router.get('/me', getUserData)
router.post('/register', registerUser)
// router.put('/api/data/:id', )
// router.delete('/api/data/:id', )



module.exports = router;