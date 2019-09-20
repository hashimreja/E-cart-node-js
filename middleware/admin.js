module.exports = function(req,res,next){
    if(!req.user.isadmin){
        return res.send("You are not authorized")
    }else{
        next()
    }
}