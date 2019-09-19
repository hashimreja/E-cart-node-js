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
const product = require('./routes/products.routes');
const cart = require('./routes/cart.routes')
//apis
app.use('/api',product);
app.use('/api',cart)

app.listen(3000 , () => {
    console.log('Listening on server')
});