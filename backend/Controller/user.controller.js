import User from '../Model/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export function authenticateUser(req,res,next){
    const authHeader = req.headers['authorization'];
    const token  = authHeader && authHeader.split(" ")[1];

    jwt.verify(token,"secretKey",(err,user)=>{
        if(err){
            return res.status(403).json({message:"Invalid JWT Token"});
        }

        req.user = user;
        next();
    })
}

export async function userSignUp(req,res){
    const {username,password,email} = req.body;

    const existingUser = await User.findOne({username:username});
    if(existingUser){
        return res.status(409).json({
            message:"User already exists!"
        })
    }
    try{
        const hash = await bcrypt.hash(password,10);
        await User.create({
            username:username,
            password:hash,
            email:email
        })
    }
    catch(err){
        res.status(400).json({
            error:err,
            message:"Enter valid details",
        })
    }
    res.status(200).json({
        message:"User Registered Successfully!"
    })
}


export async function userLogIn(req,res){
    const {username,password} = req.body;

    const existingUser = await User.findOne({username:username});
    
    if(existingUser){
        const checkPass = await bcrypt.compare(password,existingUser.password);
        if(!checkPass){
            return res.status(403).json({
                message:"please enter correct username and password"
            })
        }
    }else{
        return res.status(403).json({
            message:"please enter correct username and password"
        })
    }
    
    const accessToken = jwt.sign({data:username},"secretKey",{ expiresIn: '15m' });

    res.status(200).send({token:accessToken});
}