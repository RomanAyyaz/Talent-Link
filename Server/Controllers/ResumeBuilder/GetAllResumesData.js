const Resume = require('../../Models/UserModels/Resume')

const getAllResumes = async (req,res)=>{
    try {
        const { userId } = req.query;
        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' });
          }
        let data = await Resume.find({user:userId})
        return res.status(200).json({data:data})
    } catch (error) {
        return res.status(500).json({error:error})
    }
}

module.exports = {
    getAllResumes
}