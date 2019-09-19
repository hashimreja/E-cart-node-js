const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    const token  = req.header('x-auth-token');
    if(!token) return res.send('Token required');

    try{
        const decoded = jwt.verify(token,'hashimreja');
        req.user = decoded;
        next();
    }catch (ex){
        res.send('Invalid Token');
    }
}