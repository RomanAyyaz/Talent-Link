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
const companyInformation = async (req,res)=>{
    const {  companyName,  companyEmail, industry , companyDescription ,  companyAddress } = req.body;
    const companyLogo = req.file ? `/uploads/${req.file.filename}` : '';
    const {id} = req.params;
    try {
        const companyInformation = await Company.findByIdAndUpdate(
          id ,{
            companyName,  companyEmail, industry , companyDescription ,  companyAddress, companyLogo
        },
        { new: true });
    
        await companyInformation.save();
        return res.status(201).json({ message: 'Company Information has been added' });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
    };

module.exports = {
    companyInformation,
    upload
}