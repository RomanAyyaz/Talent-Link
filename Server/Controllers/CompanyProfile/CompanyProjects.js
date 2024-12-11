const multer = require('multer');
const path = require("path");
const Company = require('../../Models/CompanyModels/Company')

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
const companyProjects = async (req, res) => {
  try {
    const { id } = req.params;
    const { projectName, projectUrl, projectDescription, projectStartDate, projectEndDate } = req.body;
    const company = await Company.findById(id);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }

    // Extract file paths
    const projectImages = req.files.map(file => `/uploads/${file.filename}`);

    company.projects.push({
      projectName,
      projectUrl,
      projectDescription,
      projectStartDate: projectStartDate ? new Date(projectStartDate) : null,
      projectEndDate: projectEndDate ? new Date(projectEndDate) : null,
      projectImages
    });

    await company.save();

    res.status(200).json({ message: 'Project added successfully', company });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  companyProjects,
  upload
};
