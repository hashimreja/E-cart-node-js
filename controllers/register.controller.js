const registerSchema = require('../models/register.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
saltRounds = 10;

//register
exports.postregister = async (req, res) => {
    var personinfo = req.body;
    const user = await registerSchema.findOne({ email: req.body.email });
    if (user) { return res.send('user already registered') }
    if(!personinfo.password) {return res.send('password required')}
    //bcrypt
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(req.body.password, salt);
    personinfo.password = hash;
    const data = await new registerSchema(personinfo, function (err) {
        if (err) {
            return res.send(err)
        }
    })
    await data.save(function (err, any) {
        if (err) {
            return res.send(err);
        } else {
            const token = data.generateauthtoken();
            console.log(token);
            return res.header('x-auth-token',token).send(any);
        }

    })

}

//get
exports.getregister = async (req, res) =>{
    const data =await registerSchema.find(function (err, data) {
        if (err) {
            return res.send(err);
        } else {
            return res.send(data);
        }
    })
}
