const Course = require('../../Models/CourseModels/Course')

const getAllCourses = async (req,res)=>{
    try {
        let data = await Course.find()
        return res.status(200).json({coursesData:data})
    } catch (error) {
        return res.status(500).json({error:error})
    }
}

module.exports = {
    getAllCourses
}