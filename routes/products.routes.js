const router = require('express').Router();
const productController = require('../controllers/products.controller');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
//these apis should have login and admin priviliges

router.post('/addproduct',[auth,admin], productController.addProduct);
router.get('/getproduct',[auth,admin], productController.getproduct);
router.put('/updateproduct/:id',[auth,admin], productController.updateproduct)
router.delete('/deleteproduct/:id',[auth,admin], productController.deleteproduct)

module.exports = router;