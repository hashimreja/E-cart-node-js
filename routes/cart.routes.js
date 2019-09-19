const router = require('express').Router();
const auth = require('../middleware/auth');

const cartController = require('../controllers/cart.controller');



router.post('/addproducttocart/:id',auth, cartController.addProductToCart);
router.get('/getproductsfromcart/:id',auth,cartController.getProductFromCart)
router.put('/addmoreproductstocart/:id',auth,cartController.addMoreProductsToCart)
router.post('/removeproductsfromcart/:id',auth,cartController.removeProductsfromCart)

module.exports = router;