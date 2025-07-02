const Task = require('../models/Task');

exports.addTask = async (req,res)=>{
    try{
        const task = await Task.create(req.body);
        res.status(200).json({message: "task added successfully"}); 
    }catch(err){
        console.log(err);
    }
}
exports.getAllTasks = async (req,res)=>{
    try{
        const tasks = await Task.find();
        if(!tasks) return res.status(404).json({message: "task not found"});
        res.status(200).json(tasks)
    }catch(err){
        console.log(err);
    }
}

exports.getTask = async (req,res)=>{
    try{
        const task = await Task.findById(req.body.id);
    }catch(err){
        console.log(err);
    }
}