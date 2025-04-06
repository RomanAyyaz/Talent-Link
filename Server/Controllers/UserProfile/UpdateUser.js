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
  
const uploads = multer({ storage: storage });

const updateUser = async (req, res) => {
   let { id } = req.params;
   let data = req.body;
 
   if (req.file) {
     data.imageUrl = `/uploads/${req.file.filename}`;
   }
 
   try {
     let updatedUser = await User.findByIdAndUpdate(id, { $set: data }, { new: true });
     return res.status(200).json({ message: "User profile updated successfully", user: updatedUser });
   } catch (error) {
     return res.status(500).json({ error: error.message });
   }
 };
 
module.exports = {
    updateUser , uploads
}