const Resume = require('../../Models/UserModels/Resume')

const addEducation = async (req, res) => {
    const { id } = req.params; 
    const { education } = req.body; 

    try {
        const updatedResume = await Resume.findByIdAndUpdate(
            id,
            { education: education },
            { new: true }
        );

        if (!updatedResume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        res.status(200).json({ message: 'Education updated successfully', updatedResume });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    addEducation
}
