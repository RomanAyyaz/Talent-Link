const Resume = require('../../Models/UserModels/Resume')

const themeChange = async(req,res)=>{
    const { themeColor , id } = req.body; 
   try {
    const updatedResume = await Resume.findByIdAndUpdate(
        id,
        { themeColor: themeColor },
        { new: true }
    );

    if (!updatedResume) {
        return res.status(404).json({ message: 'Resume not found' });
    }

    res.status(200).json({ message: 'Theme updated successfully', updatedResume });
   } catch (error) {
    res.status(500).json({ error: error.message });
   }
}

module.exports = {
    themeChange
}