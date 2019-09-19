const mongoose = require('mongoose');
const cartSchema = mongoose.Schema({
    cartid : {type:String , required : true},
    productid : [{type:mongoose.Schema.Types.ObjectId,ref:'allproducts' }],
    quantity : {type:Number,default:1}
})


module.exports = mongoose.model('cartdata',cartSchema);