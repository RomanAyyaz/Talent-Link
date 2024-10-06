const Resume = require('../../Models/UserModels/Resume')

const getAllResumes = async (req,res)=>{
    try {
        let data = await Resume.find({})
        return res.status(200).json({data:data})
    } catch (error) {
        return res.status(500).json({error:error})
    }
}

module.exports = {
    getAllResumes
}