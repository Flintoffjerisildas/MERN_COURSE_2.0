const Task = require("../models/task");

const createTask = async (req,res)=>{
    try{
        const{title , description}= req.body;

        if(!title || !description){
            return res.status(400).send({message : "Title or Description is required"});
        }

        const currTask = await Task.findOne({title,user:req.user.id});
        
        if(currTask){
            return res.status(409).json({message:"Task already exists"});
        }
        const newTask = new Task({title , description , user : req.user.id});
        await newTask.save();

        res.status(201).json({ message: "task Created successfully",newTask});
        } catch (error) {
            res.status(500).json({ message: "Server error, unable to create task" });
        }
};
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Server error, unable to fetch tasks" });
    }
};
module.exports = {
    createTask,
    getTasks
};
