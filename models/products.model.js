const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    productname: { type: String, required: true },
    price: { type: Number, required: true },
    specifications : {type:Array},
    sellername : {type:String},
    counter : {type: Number, required:true}
})


module.exports = mongoose.model('allproducts', productSchema);