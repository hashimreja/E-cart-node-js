const productSchema = require('../models/products.model');
//products

exports.addProduct =async (req,res) =>{
    var productinfo = req.body;
    console.log(productinfo);
    const productdata = new productSchema(productinfo,function(err){
        if(err){
            return res.send('Error occured');
        }
    })
    productdata.save(function(err,docs){
        if(err){
            return res.send(err)
        }else{
            console.log(docs);
            res.send(docs)
        }
    });
}



exports.getproduct = async function(req,res) {
    const data = await productSchema.find(function(err,docs){
        if(err){
            return res.send(err);
        }else{
            res.send(docs);
        }
    })
}


exports.updateproduct =async function(req,res){
    const data = await productSchema.findByIdAndUpdate({_id:req.params.id}, req.body , function(err,docs){
        if(err){
            return res.send(err);
        }else{
            res.send(docs);
        }
    })
}

exports.deleteproduct =async function(req,res){
    const data = await productSchema.findByIdAndDelete({_id:req.params.id},function(err,docs){
        if(err){
            return res.send(err)
        }else{
            res.send(docs)
        }
    })
}