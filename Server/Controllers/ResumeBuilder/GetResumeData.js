const Resume = require('../../Models/UserModels/Resume')

const getResume = async(req,res)=>{
    try {
        let {id} = req.params 
        let resumeData = await Resume.findById({_id:id})
        if(!resumeData){
            return res.status(404).json({message:'The resume does not exits'})
        }
        return res.status(200).json({data:resumeData})
    } catch (error) {
        return res.status(500).json({error:error})        
    }
}

module.exports = {
    getResume
}