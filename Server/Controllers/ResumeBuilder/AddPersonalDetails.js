const Resume = require('../../Models/UserModels/Resume')

const addPersonalDetails = async (req, res) => {
    try {
        let { id } = req.params
        let { firstName, lastName, jobTitle, address, phone, email } = req.body
        const updatedResume = await Resume.findByIdAndUpdate(id, {
            firstName: firstName,
            lastName: lastName,
            jobTitle: jobTitle,
            address: address,
            phone: phone,
            email: email
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
    addPersonalDetails
}