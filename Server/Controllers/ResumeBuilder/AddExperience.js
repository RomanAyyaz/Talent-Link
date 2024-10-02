const Resume = require('../../Models/UserModels/Resume')

const addExperience = async (req, res) => {
    const { id } = req.params; 
    const { experience } = req.body; 

    try {
        const updatedResume = await Resume.findByIdAndUpdate(
            id,
            { experience: experience },
            { new: true }
        );

        if (!updatedResume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        res.status(200).json({ message: 'Experience updated successfully', updatedResume });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    addExperience
}
