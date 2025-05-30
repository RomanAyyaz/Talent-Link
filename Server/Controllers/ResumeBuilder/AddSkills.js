const Resume = require('../../Models/UserModels/Resume')

const addSkills = async (req, res) => {
    const { id } = req.params; 
    const { skills } = req.body; 

    try {
        const updatedResume = await Resume.findByIdAndUpdate(
            id,
            { skills: skills },
            { new: true }
        );

        if (!updatedResume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        res.status(200).json({ message: 'Skills updated successfully', updatedResume });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    addSkills
}
