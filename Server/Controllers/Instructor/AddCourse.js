const multer = require('multer');
const path = require("path");
const Course = require('../../Models/CourseModels/Course')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve("./public/uploads/"));
    },
    filename: function (req, file, cb) {
      const fileName = `${Date.now()}-${file.originalname}`;
      cb(null, fileName);
    }
  });
  
const upload = multer({ storage: storage });
  
const AddCourse = async (req, res) => {
    const { title, description, instructor, category, price, duration, learningOutcomes } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';
    console.log(req.body)
    try {
      const newCourse = new Course({
        title,
        description,
        instructor,
        category,
        price,
        duration,
        learningOutcomes: JSON.parse(learningOutcomes),
        imageUrl,
      });
  
      await newCourse.save();
      return res.status(201).json({ message: 'Course has been created' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  

module.exports = {
    AddCourse , upload
}