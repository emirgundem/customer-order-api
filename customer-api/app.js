const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const port = 3000;
require('dotenv').config();


const app = express();

app.use(bodyparser.json());




//ROUTES
const customersRoute = require('./routes/customers');
const productsRoute = require('./routes/products');
app.use('/api/customers', customersRoute);
app.use('/api/products',productsRoute);



//Connection DB
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true,useUnifiedTopology:true},()=>
    console.log('Connection Success')
);


app.listen(port, () => {
    console.log('Server running on port : ', port);
})






