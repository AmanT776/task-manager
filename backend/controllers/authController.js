const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
require('dotenv').config();
exports.signup = async(req,res)=>{
    try{
        const {email, password} = req.body;
        const exists = await User.findOne({email});
        if(exists) return res.json.status(409).json({message: "user already exists"});
        const hash = bcrypt.hash(password,10);
        const user = await User.create({email,password: hash});
        const token = jwt.sign({id: user._id,role: user.role},process.env.JWT_TOKEN,{
            expiresIn: '1h'
        });
        res.json(token);
    }catch(err){
        console.error('error: ',err);
    }
}

exports.login = (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = User.findOne({email});
        if(!user) return res.status(404).res({message: "user not found"});
        const match = bcrypt.compare(password,user.password);
        if(!match) return res.status(401).json({message: "password not match"});
        const token = jwt.sign({id: user._id,role: user.role},process.env.JWT_TOKEN);
        res.json(token);
    }catch(err){
        console.error('login error: ',err);
    }
}