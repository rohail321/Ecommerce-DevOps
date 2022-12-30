const express = require('express')
const router=express.Router()
const {isEmpty}=require('lodash')
const Product = require('../models/Product')
const Cart = require('../models/Cart')
const auth=require('../middleware/authorization')


router.get('/',async (res,req)=>{
    try {
        const userId=req.user.userId
        const carts=await Cart.find({userId})
        if(isEmpty(carts)) return res.send({products:[]})

        let retrievedCard;
        carts.forEach(cart=>{
            if(!cart.fulfilled)retrievedCard=cart
        })

        let products=[]
        let result={}
        if(!isEmpty(retrievedCard)){
            products=retrievedCard.products.map(product=>Product.findById({_id:product}) )
            products= await Promise.all(products)
            result={...retrievedCard.toJSON(),products}
        }
        res.send({result})
    } catch (err) {
        res.status(500).json({msg:"server issue"})

    }
})
router.put('/:id',auth, async (req,res)=>{
    try {
        const cartId=req.params.cartId
        const product=req.body.product
        const cart=await Cart.update({_id:cartId},{$pullAll:{products:[product]}})
        res.send({cart})
    } catch (err) {
        res.status(500).json({msg:"server issue"})

    }
})

module.exports=router