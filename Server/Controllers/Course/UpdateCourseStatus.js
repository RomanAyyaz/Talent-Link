const Course = require('../../Models/CourseModels/Course')
const updateCourseStatus = async (req, res) => {
    const { id } = req.params
    console.log(id)
    try {
        await Course.findByIdAndUpdate(id, { bought: true });
        res.json({ message: "Course updated successfully" });
    } catch (error) {
        return res.status(500).json({ error: error })
    }
}

module.exports = {
    updateCourseStatus
}