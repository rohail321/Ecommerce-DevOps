const express = require('express')
const router=express.Router()
const {check,validationResult}=require('express-validator')
const bcrypt=require("bcryptjs")
const jwt=require("JsonWebToken")

const { jwtSecret } = require('../config/keys')
const Profile = require('../models/Profile')

router.get('/:id',async(req,res)=>{
    try {
        const profile=await Profile.findOne({userId:req.params.id})
        if(!profile){
            return res.status(400).json({msg:"Profile does not exist"})
        }
        res.json(profile)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({msg:"server issue"})
    }
})

module.exports=router