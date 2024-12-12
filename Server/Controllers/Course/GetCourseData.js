const Course = require('../../Models/CourseModels/Course')

const getCourseData = async (req,res)=>{
    try {
        let {id} = req.params 
        let courseData = await Course.findById({_id:id})
        if(!courseData){
            return res.status(404).json({message:'The course does not exits'})
        }
        return res.status(200).json({data:courseData})
    } catch (error) {
        return res.status(500).json({error:error})        
    }
}

module.exports = {
    getCourseData
}