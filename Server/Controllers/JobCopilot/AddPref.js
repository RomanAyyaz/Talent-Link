const Pref = require('../../Models/CopilotModels/CopilotPref')

const updatePref = async (req, res) => {
    try {
        const data = req.body;
        const { id } = req.params;
        console.log(data , id)
        const pref = await Pref.findOneAndUpdate(
            { user: id },
            data,
            { upsert: true, new: true }
        );
        res.json(pref);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    updatePref
};