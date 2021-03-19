const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
   name : {
       type : String,
       required : true,
       minlength : 2,
       maxlength : 30,
   },
   phoneNumber : {
        type : Number,
        required: true,
        minlength: 10,
        maxlength : 11,
   },
   email : {
       type : String,
       required : true,
       unique : true,
       minlength : 2,
       maxlength : 30,

   },
   city : {
      type : String,
      required : true,
      minlength : 3,
      maxlength : 20,
   },

   address: {
       type : String,
       required : true,
       minlength : 8,
       maxlength : 250,

   },

   status : {
       type : Boolean,
       default : true,
   },
   
   createdAt : {
       type : Date,
       default : Date.now,
   }

})


module.exports = mongoose.model('customers',customerSchema);