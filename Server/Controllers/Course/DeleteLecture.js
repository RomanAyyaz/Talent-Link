const Course = require('../../Models/CourseModels/Course'); 

const deleteLecture = async (req, res) => {
  try {
    const courseId = req.params.id; 
    const { lessonId } = req.body; 

    if (!lessonId) {
      return res.status(400).json({ message: 'Lesson ID is required' });
    }

    const result = await Course.updateOne(
      { _id: courseId },
      { $pull: { lessons: { _id: lessonId } } }
    );

   
    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: 'Lesson not found or already deleted' });
    }

    res.status(200).json({ message: 'Lesson deleted successfully' });
  } catch (error) {
    console.error('Error deleting lecture:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  deleteLecture,
};
