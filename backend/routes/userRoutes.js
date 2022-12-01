const router = require('express').Router();
const { registerUser, getUserData, loginUser } = require('../controller/userController');

router.get('/me', getUserData)
router.post('/register', registerUser)
router.post('/login', loginUser)
// router.put('/api/data/:id', )
// router.delete('/api/data/:id', )



module.exports = router;