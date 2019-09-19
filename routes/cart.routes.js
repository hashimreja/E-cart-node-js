const router = require('express').Router();


const cartController = require('../controllers/cart.controller');



router.post('/addproducttocart/:id', cartController.addProductToCart);
router.get('/getproductsfromcart/:id',cartController.getProductFromCart)
router.put('/addmoreproductstocart/:id',cartController.addMoreProductsToCart)
router.post('/removeproductsfromcart/:id',cartController.removeProductsfromCart)

module.exports = router;