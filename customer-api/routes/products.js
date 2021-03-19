const { request,response, Router } = require('express');
const express = require('express');
const router = express.Router();

//DB MODEL
const Products = require('../models/Products');
const { route } = require('./customers');


router.get('/getproducts',async(request,response)=>{
     try {
         const getProducts = await Products.find();
         response.json(getProducts);
         
     } catch (err) {
         response.json({message: err})
     }
})

router.post('/new',async(request,response)=>{
    try {
        const newProduct = new Products({
            title : request.body.title,
            name : request.body.name,
            color : request.body.color,
            price : request.body.price
        })
        const saveProduct = await newProduct.save();
        response.json(saveProduct);
    } catch (err) {
        response.json({message: err})
    }
})

router.get('/search/:product_id',async(request,response)=>{
    try {
        const getProductbyId = await Products.findById(request.params.product_id);
        response.json(getProductbyId);

    } catch (err) {
        response.json({message: err})
    }
})


router.put('/update/:product_id',async(request,response)=>{
    try {
        const updateProductById = await Products.updateOne({_id: request.params.product_id},
        {
            $set: {
                title : request.body.title,
                name : request.body.name,
                color : request.body.color,
                price : request.body.price
            }
        })

        response.json(updateProductById);

    } catch (err) {
        response.json({message: err})
    }
})

router.delete('/delete/:product_id',async(request,response)=>{
    try {
        const deleteProductbyId = await Products.findByIdAndDelete(request.params.product_id);
        response.json(deleteProductbyId);

    } catch (err) {
        response.json({message:err})
    }
})


router.get('/limit',async(request,response)=>{
    try {
        const getproducts = await Products.find().limit(2);
        response.json(getproducts);
    } catch (err) {
        response.json({message:err})
    }
})

router.get('/skip',async(request,response)=>{
    try {
        const getProducts = await Products.find().skip(1)
        response.json(getProducts);
    } catch (err) {
        response.json({message:err})
    }
})



































module.exports = router;