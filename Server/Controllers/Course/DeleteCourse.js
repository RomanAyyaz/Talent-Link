const Company = require('../../Models/CourseModels/Course')
const deleteCourse = async (req,res) => {
    const {id} = req.params
    try {
        const courseData = await Company.findByIdAndDelete(id);
        if(!courseData){
            return res.status(404).json({ message: 'Course not found' });
        }
        return res.status(200).json({message:"Course deleted successfully"})        
    } catch (error) {
        return res.status(500).json({error:error})
    }
}


module.exports = {
    deleteCourse
}