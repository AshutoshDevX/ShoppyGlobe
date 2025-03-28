import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://admin:<Password>@cluster1.27bkq.mongodb.net/e-commerce");

const db = mongoose.connection;

db.on('open',()=>
    console.log("Connection Successful")
)

db.on('error',()=>{
    console.log("Connection not successful")
})


const product = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    discountPercentage:{
        type:Number,
    },
    rating:{
        type:Number,
    },
    stock:{
        type:Number,
        required:true,
    },
    reviews:[{comment:String}],
    images:[
        {
            type:String,
            required:true,
            unique:true,
        }
    ]
})

const Product = mongoose.model("Product",product);

export default Product;
