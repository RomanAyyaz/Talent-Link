const JobAlert = require('../../Models/JobModels/JobAlert');

const jobAlertSub = async (req, res) => {
    const { jobType, email, frequency } = req.body;
    try {
        const alert = new JobAlert({ jobType, email, frequency });
        await alert.save();
        res.status(201).json({ message: 'Subscription saved' });
    } catch (err) {
        console.error('Save Error:', err);
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports = {
    jobAlertSub
}