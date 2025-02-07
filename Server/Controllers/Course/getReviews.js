const Course = require('../../Models/CourseModels/Course');
const getReviewsData = async (req, res) => {
    try {
        let { id } = req.params;
        let courseData = await Course.findById(id).populate({
            path: 'reviews.user',
            select: 'fullname'
        });

        if (!courseData) {
            return res.status(404).json({ message: 'The course does not exist' });
        }

        console.log('Course reviews:', courseData.reviews);
        
        return res.status(200).json({ data: courseData.reviews, message: "Reviews retrieved successfully" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getReviewsData
};
