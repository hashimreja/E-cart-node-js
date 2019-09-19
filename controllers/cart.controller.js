const cartschema = require('../models/cart.model');
const productschema = require('../models/products.model');

//Add product to cart through cartid
exports.addProductToCart =async function(req,res){
    const productdetails = req.body;
    usercartid  = req.params.id;
    const data =await new cartschema({
        productid : productdetails.productid,
        cartid : usercartid
    },function(err){
        if(err){
            return res.send({
                status:false,
                error : 'error occured'
            })
        }
    })
    const product = await productschema.findOneAndUpdate({_id:productdetails.productid},{$inc:{counter:-1}})

    await data.save(function(err,docs){
        if(err){
            return res.send({
                status:false,
                error : 'Error occured while saving to cart :'
            })
        }else{
            res.send({
                status:true,
                Data : docs
            })
        }
    })
}

//Get product from cart through cartid
exports.getProductFromCart =async function(req,res){
    const cartdata =await cartschema.findOne({cartid: req.params.id})
    .populate('productid', 'productname price')
    .then(data => {
        res.send({
            status:true,
            Data : data
        })
    })
    .catch(err => {
        res.send({
            status : false,
            error : err
        })
    })
}   

//Add more products to cart through cartid
exports.addMoreProductsToCart = function(req,res){
    console.log('inside addmoreproducts function');
    productdetails = req.body;
    const data = cartschema.findOneAndUpdate({cartid:req.params.id},{$push:{productid :productdetails.productid}},function(err,docs){
        if(err){
            return res.send({
                status:false,
                error:err
            })
        }else{
            return res.send({
                status:true,
                Data :docs
            })
        }
    })
}

//remove more products to cart through cartid
exports.removeProductsfromCart =async function(req,res){
    console.log('inside addmoreproducts function');
    productdetails = req.body;
    await productschema.findOneAndUpdate({_id:productdetails.productid},{$inc:{counter:1}})
    const data =await cartschema.findOneAndUpdate({cartid:req.params.id},{$pull:{productid :productdetails.productid}},function(err,docs){
        if(err){
            return res.send({
                status:false,
                error:err
            })
        }else{
            return res.send({
                status:true,
                Data :docs
            })
        }
    })
}
