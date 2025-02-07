const mongoose = require('mongoose');
const Course = require('../../Models/CourseModels/Course');

const submitReview = async (req, res) => {
    const { id } = req.params;
    const { comment, user } = req.body;

    try {
        let courseData = await Course.findById(id);
        if (!courseData) {
            return res.status(404).json({ message: "Course not found" });
        }

        // Ensure the user ID is stored as an ObjectId
        courseData.reviews.push({
            comment: comment,
            user: new mongoose.Types.ObjectId(user) // Convert string to ObjectId
        });

        await courseData.save();

        return res.status(200).json({ message: "Review has been added successfully" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    submitReview
};
