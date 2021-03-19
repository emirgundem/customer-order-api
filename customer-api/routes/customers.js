const { response, request } = require('express');
const express = require('express');
const router = express.Router();

//DB MODEL
const Customers = require('../models/Customers');


router.get('/getall',async(request,response)=>{
    try{
       const getCustomers = await Customers.find();
       response.json(getCustomers);
    }

    catch(err){
        response.json({message: err});
    }
})

router.post('/new',async(request,response)=>{
    try{
        const newcustomer = new Customers({
            name : request.body.name,
            phoneNumber : request.body.phoneNumber,
            email : request.body.email,
            city : request.body.city,
            address : request.body.address
        })
        
        const saveNewCustomer = await newcustomer.save();
        response.json(saveNewCustomer);

    } catch(err){
        response.json({message: err})
    }
})


router.get('/search/:id',async(request,response)=>{
    try {
        const searchCustomer = await Customers.findById(request.params.id);
        response.json(searchCustomer);

    } catch (err) {
        response.json({message:err})
    }
})

router.put('/update/:id',async(request,response)=>{
    try{

        const updateCustomer = await Customers.updateOne({_id: request.params.id},
            {$set :{
                   name: request.body.name,
                   phoneNumber: request.body.phoneNumber,
                   email: request.body.email,
                   city : request.body.city,
                   address : request.body.address
                }
            });

            response.json(updateCustomer);
          
    }catch(err){
        response.json({message: err})
    }
})


router.delete('/delete/:id',async(request,response)=>{
    try{
        const deleteCustomer = await Customers.findByIdAndDelete({_id: request.params.id})
        response.json('information was deleted');

    } catch(err){
        response.json({message: err})
    }
})


router.get('/limit',async(request,response)=>{
    try {
      const getCustomer = await Customers.find().limit(20);
      response.json(getCustomer);
    } catch (err) {
        response.json({message:err})
    }
})












module.exports = router;

