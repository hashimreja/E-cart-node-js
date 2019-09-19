const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const registerController = require('../controllers/register.controller');


router.post('/register',registerController.postregister);
router.get('/register',auth,registerController.getregister);


module.exports = router;


