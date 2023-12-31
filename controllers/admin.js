
const LogicpoolCourses = require('../models/courses');
const LogicpoolModules = require('../models/modules');
const LogicpoolModuleTopics = require('../models/moduleTopics');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');


/////// For Courses

async function addCourse(req, res) {
    try {

        let incomingCourseName = req.body.courseName;
        let incomingCourseDuration = req.body.courseDuration;
     
        const newCourse = new LogicpoolCourses({
            courseName: incomingCourseName,
            courseDuration: incomingCourseDuration
        });

        await newCourse.save();
        console.log("New Course Added");
        res.status(201).json({message: "New Course Added Successfully" , status: "true"});

    } catch (error) {
        console.log(error);
        res.status(500).json({Message: error.message});
    }
}

async function getCourse(req, res) {

    try {
        
        let incomingCourseName = req.body.courseName;
        
        let course = await LogicpoolCourses.find({courseName: incomingCourseName});
        
        if(course.length > 0) return res.status(200).json({course , status: "true"});
        else return res.status(404).json({message: 'Course Not Found' , status: "false"});
               
    }catch (err) {
        console.log(err);
        res.status(500).json({message: `${err.message}`});
    }
}

async function getAllCourse(req, res) {
    try {

        let allCourses = await LogicpoolCourses.find(); //This will find all available courses

        if(allCourses.length > 0) return res.status(200).json({allCourses , status: "true"});
        else return res.status(404).json({message: 'No Course Available' , status: "false"});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: `${err.message}`});
        
    }
}

async function updateCourse(req, res) {
    try {

        let incomingNewCourseName = req.body.courseName;
        let incomingNewCourseDuration = req.body.courseDuration;

        let updatedCourse = await LogicpoolCourses.findByIdAndUpdate(
            { _id : req.params.id },

            {
                courseName: incomingNewCourseName,
                courseDuration: incomingNewCourseDuration
            },

            {new: true}
        );

        console.log(updatedCourse);
        res.status(200).json({updatedCourse , status: true , message: 'Course Updated Successfully'})
    } catch (err) {
        console.log(err);
        res.status(500).json({message: `${err.message}`});
    }
}

async function deleteCourse(req, res) {
    try {
        await LogicpoolCourses.deleteOne({ _id : req.params.id});
        console.log(`Course _id: ${req.params.id} is now deleted from the database`);
        res.status(200).json({message: `Course _id: ${req.params.id} is now deleted from the database`});        
    } catch (err) {
        console.log(err);
        res.status(500).json({message: `${err.message}`});
    }
}


/////// For Modules

async function addModule(req, res) {
    try {

        let incomingCourseName = req.body.courseName;
        let incomingModuleName = req.body.moduleName;
        
             
        const newModule = new LogicpoolModules({
            courseName: incomingCourseName,
            moduleName: incomingModuleName
        });

        await newModule.save();
        console.log("New Module Added");
        res.status(201).json({message: "New Module Added Successfully" , status: "true"});

    } catch (error) {
        console.log(error);
        res.status(500).json({Message: error.message});
    }
}

async function getModule(req, res) {

    try {
        
        let incomingModuleName = req.body.moduleName;
        
        let module = await LogicpoolModules.find({moduleName: incomingModuleName});
        
        if(module.length > 0) return res.status(200).json({module , status: "true"});
        else return res.status(404).json({message: 'Module Not Found' , status: "false"});
               
    }catch (err) {
        console.log(err);
        res.status(500).json({message: `${err.message}`});
    }
}

async function getAllModule(req, res) {
    try {

        let allModule = await LogicpoolModules.find(); //This will find all available modules

        if(allModule.length > 0) return res.status(200).json({allModule , status: "true"});
        else return res.status(404).json({message: 'No Module Available' , status: "false"});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: `${err.message}`});
        
    }
}

async function updateModule(req, res) {
    try {

        let incomingNewCourseName = req.body.courseName;
        let incomingModuleName = req.body.moduleName;
        

        let updatedModule = await LogicpoolModules.findByIdAndUpdate(
            { _id : req.params.id },

            {
                courseName: incomingNewCourseName,
                moduleName: incomingModuleName
            },

            {new: true}
        );

        console.log(updatedModule);
        res.status(200).json({updatedModule , status: true , message: 'Module Updated Successfully'})
    } catch (err) {
        console.log(err);
        res.status(500).json({message: `${err.message}`});
    }
}

async function deleteModule(req , res) {
    try {
        await LogicpoolModules.deleteOne({ _id : req.params.id});
        console.log(`Module _id: ${req.params.id} is now deleted from the database`);
        res.status(200).json({message: `Module _id: ${req.params.id} is now deleted from the database`});        
    } catch (err) {
        console.log(err);
        res.status(500).json({message: `${err.message}`});
    }
}


/////// For Module Topics

async function addTopic(req, res) {
    try {

        let incomingModuleName = req.body.moduleName;
        let incomingTopicName = req.body.topicName;

        const module = await LogicpoolModules.find({moduleName: incomingModuleName});

        if(module.length > 0) {

            const newTopic = new LogicpoolModuleTopics({
                moduleName: incomingModuleName,
                topicName: incomingTopicName
            });
    
            await newTopic.save();
            console.log(`New Topic Added in ${incomingModuleName} Module`);
            res.status(201).json({message: `New Topic Named ${incomingTopicName} is now Added in ${incomingModuleName} Module` , status: "true"});

        } else {
            res.status(404).json({message: `${incomingModuleName} Module Is Not Found` , status: "false"});
        }
             
        

    } catch (error) {
        console.log(error);
        res.status(500).json({Message: error.message});
    }
}

async function getTopic(req, res) {

    try {
        
        let incomingModuleName = req.body.moduleName;
        
        let module = await LogicpoolModuleTopics.find({moduleName: incomingModuleName});
        
        if(module.length > 0) return res.status(200).json({module , status: "true"});
        else return res.status(404).json({message: 'No Topics Available as Module Not Found' , status: "false"});
               
    }catch (err) {
        console.log(err);
        res.status(500).json({message: `${err.message}`});
    }
}

async function updateTopic(req, res) {

}

async function deleteTopic(req, res) {

}






module.exports = {
    //Courses
    addCourse,
    getCourse,
    getAllCourse,
    updateCourse,
    deleteCourse,
    
    //Modules
    addModule,
    getModule,
    getAllModule,
    updateModule,
    deleteModule,

    //Module Topics
    addTopic,
    getTopic,
    updateTopic,
    deleteTopic





}
