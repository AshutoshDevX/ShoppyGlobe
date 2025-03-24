import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://admin:Ashutosh123@cluster1.27bkq.mongodb.net/e-commerce");


const user = mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        // minLength:6,
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})

const User = mongoose.model("User",user);

export default User;
