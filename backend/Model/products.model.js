import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://admin:Ashutosh123@cluster1.27bkq.mongodb.net/e-commerce");

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
