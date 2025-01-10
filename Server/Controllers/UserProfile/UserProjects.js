const multer = require('multer');
const path = require("path");
const User = require('../../Models/UserModels/User')

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

// Controller for adding projects
const userProjects = async (req, res) => {
  try {
    const { id } = req.params;
    const { projectName, projectUrl, projectDescription, projectStartDate, projectEndDate } = req.body;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Extract file paths
    const projectImages = req.files.map(file => `/uploads/${file.filename}`);

    user.projects.push({
      projectName,
      projectUrl,
      projectDescription,
      projectStartDate: projectStartDate ? new Date(projectStartDate) : null,
      projectEndDate: projectEndDate ? new Date(projectEndDate) : null,
      projectImages
    });
    console.log(user)
    await user.save();

    res.status(200).json({ message: 'Project added successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  userProjects,
  upload
};
