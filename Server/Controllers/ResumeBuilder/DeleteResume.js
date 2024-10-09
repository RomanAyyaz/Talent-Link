const Resume = require('../../Models/UserModels/Resume');

const deleteResume = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedResume = await Resume.findByIdAndDelete(id);
        
        if (!deletedResume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        return res.status(200).json({ message: 'Resume deleted successfully' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    deleteResume
};
