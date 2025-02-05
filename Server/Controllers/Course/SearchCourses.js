const Course = require('../../Models/CourseModels/Course')

const searchCourses = async (req, res) => {
    try {
        const { query } = req.query;

        if (!query) {
            return res.status(400).json({ message: "Query parameter is required" });
        }

        const courses = await Course.find({
            $or: [
                { title: { $regex: query, $options: "i" } },
                { description: { $regex: query, $options: "i" } }
            ]
        });
        res.status(200).json({ coursesData: courses });
    } catch (error) {
        console.error("Search Error:", error);
        res.status(500).json({ message: "Server error while searching courses" });
    }
};

module.exports = {
    searchCourses
}