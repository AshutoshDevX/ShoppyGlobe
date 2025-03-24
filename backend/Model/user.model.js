import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://admin:<Password>@cluster1.27bkq.mongodb.net/e-commerce");

const db = mongoose.connection;

db.on('open',()=>
    console.log("Connection Successful")
)

db.on('error',()=>{
    console.log("Connection not successful")
})


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
