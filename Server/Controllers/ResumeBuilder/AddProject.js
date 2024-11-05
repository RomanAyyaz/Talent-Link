const Resume = require('../../Models/UserModels/Resume')
const addProject = async (req,res)=>{
    const { id } = req.params; 
    const { project } = req.body; 
    try {
        const updatedResume = await Resume.findByIdAndUpdate(
            id,
            { project: project},
            { new: true }
        );

        if (!updatedResume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        res.status(200).json({ message: 'certification updated successfully', updatedResume });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    addProject
}