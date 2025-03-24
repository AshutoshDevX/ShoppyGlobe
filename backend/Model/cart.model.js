import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://admin:<Password>@cluster1.27bkq.mongodb.net/e-commerce");

const cart = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
    },
    rating: {
        type: Number,
    },
    review: String,
    image: {
        type: String,
        required: true,
    },
    quantity:{
        type:Number,
        required:true
    }

})

const Cart = mongoose.model("Cart", cart);

export default Cart;