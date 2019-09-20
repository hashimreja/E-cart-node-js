const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const admin = require('../middleware/admin');
const registerController = require('../controllers/register.controller');


router.post('/register',registerController.postregister);
router.get('/getuserdata',[auth,admin],registerController.getuserdata);
router.delete('/removeuserdata',[auth,admin],registerController.deleteuser);

module.exports = router;


