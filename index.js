const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/onlinemarket",{useNewUrlParser:true,useUnifiedTopology:true},(err) => {
   if(err){
       console.log(err);
   }else{
       console.log('Database Conected')
   }
})
const bodyparser = require('body-parser');
app.use(bodyparser.json());

//routes
const register = require('./routes/register.routes');
const login = require('./routes/login.routes');
const product = require('./routes/products.routes');
const cart = require('./routes/cart.routes')
//apis
app.use('/api',register);
app.use('/api',login);
app.use('/api',product);
app.use('/api',cart);


//Listening on server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening on server')
});