const express = require('express')
const router = express.Router()
const Student = require('../models/students')

// Create new student
router.post('/students',async(req,res)=>{
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(200).send(createUser);
    } catch (error) {
        res.status(400).send(error)
    }
})

// Get all students
router.get('/students',async (req,res)=>{
    try {
        const numberOfStudentsRegistred = await Student.find();
        res.send(numberOfStudentsRegistred)

    } catch (error) {
        res.status(400).send(error)
   }
})

// Get particular student
router.get('/students/:id',async (req,res)=>{
    try {
        const _id = req.params.id;
        const particularStudent = await Student.findById({_id});
        res.send(particularStudent)

    } catch (error) {
        res.status(400).send(error)
   }
})

// Delete particluar student
router.delete('/students/:id',async (req,res)=>{
     try {
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id)
        if(!_id){
           return res.status(400).send();
        }else{
        res.send(deleteStudent);
        }
     } catch (error) {
        res.status(500).send(error)
     }
})

module.exports =  router;