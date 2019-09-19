const router = require('express').Router();
const productController = require('../controllers/products.controller');
const auth = require('../middleware/auth');

//these apis should have login and admin priviliges

router.post('/addproduct',auth, productController.addProduct);
router.get('/getproduct',auth, productController.getproduct);
router.put('/updateproduct/:id',auth, productController.updateproduct)
router.delete('/deleteproduct/:id',auth, productController.deleteproduct)

module.exports = router;