const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const registerSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true,
        unique:true
        },
    password : {
        type:String,
        required : true
    },
    isadmin : {
        type :Boolean
    }
});

registerSchema.methods.generateauthtoken = function (){
    const token = jwt.sign({name:this.name,isadmin : this.isadmin} , 'hashimreja');
    return token;
}

module.exports = mongoose.model('register',registerSchema);


