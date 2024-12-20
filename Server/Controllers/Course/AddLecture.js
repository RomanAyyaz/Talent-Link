const multer = require('multer');
const path = require('path');
const Course = require('../../Models/CourseModels/Course');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("./public/uploads/"));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  }
});


const uploadVideo = multer({ storage: storage });


const addLecture = async (req, res) => {
  try {
    const { id } = req.params; 
    const { title, description } = req.body;
    const videoPath = req.file ? `/uploads/${req.file.filename}` : '';
    const updatedCourse = await Course.findByIdAndUpdate(
      id,
      { 
        $push: { 
          lessons: { 
            title, 
            description, 
            videoUrl: videoPath 
          } 
        } 
      },
      { new: true, runValidators: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }

    return res.status(201).json({ 
      message: 'Lesson added successfully', 
      course: updatedCourse 
    });
  } catch (error) {
    console.error('Error adding lesson:', error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  uploadVideo,
  addLecture
};
