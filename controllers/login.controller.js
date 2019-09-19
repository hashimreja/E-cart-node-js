const userschema = require('../models/register.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//login
exports.loginuser = async function (req, res) {
    var login = req.body;
    console.log(login);
    await userschema.findOne({ email: req.body.email }, function (err, data) {
        console.log('dataaaaaaaaa', data);
        if (!data) {
            return res.send('Invalid email id');
        } else {
            bcrypt.compare(req.body.password, data.password, function (err, any) {
                if (!any) {
                    return res.send('Password does not match');
                } else {
                    const token = jwt.sign({name : data.name}, 'hashimreja')
                    // return res.send('you are logged in successfully');
                    return res.send(token);
                }
            })
        }
    });
}