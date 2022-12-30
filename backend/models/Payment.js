const mongoose=require('mongoose')
const Schema=mongoose.Schema
const paymentSchema=new Schema ({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
       },
   cartId:{
    type:mongoose.Schema.Types.ObjectId,
    required:true
   }
},{timestamps:true})

const Payment=mongoose.model("Payment", paymentSchema);
module.exports= Payment