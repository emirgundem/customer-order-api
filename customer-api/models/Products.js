const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
    title: {
         type : String,
         required : true
    },

    name: {
        type : String,
        required: true,
    },

    color : {
        type : String,
        required : true,
    },

    price : {
        type : Number,
        required : true,

    },

    stockStatus : {
         type : Boolean,
         default : true,
    },

    createdAt : {
        type : Date,
        default : Date.now,
    }

})


module.exports = mongoose.model('products',productsSchema);
