const router = require('express').Router();
const productController = require('../controllers/products.controller');


//these apis should have login and admin priviliges

router.post('/addproduct', productController.addProduct);
router.get('/getproduct', productController.getproduct);
router.put('/updateproduct/:id', productController.updateproduct)
router.delete('/deleteproduct/:id' , productController.deleteproduct)

module.exports = router;