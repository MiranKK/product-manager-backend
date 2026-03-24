const mongoose=require("mongoose")

const ProductSchema=new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    userId:String,
 
},{timestamps:true})

module.exports=mongoose.model("Product",ProductSchema)