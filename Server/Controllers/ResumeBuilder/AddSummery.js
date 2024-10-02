const Resume = require('../../Models/UserModels/Resume')

const addSummery = async (req, res) => {
    try {
        let { id } = req.params
        let { summery } = req.body
        const updatedResume = await Resume.findByIdAndUpdate(id, {
            summery: summery,
        },{new:true})
        if (!updatedResume) {
            return res.status(404).json({ message: 'Resume not found' });
        }
        res.status(200).json(updatedResume);
    } catch (error) {
        res.status(500).json({ error: error })
    }
}

module.exports = {
    addSummery
}