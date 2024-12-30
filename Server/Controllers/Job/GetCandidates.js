const JobApplication = require('../../Models/JobModels/JobApplication')
let getCandiates = async (req,res)=>{
    let {id} = req.params;
    try {
        let candidatesData = await JobApplication.find({jobId:id}).populate('userId');
        if(!candidatesData){
            res.status(404).json({message:"There is no candidate data"})
        }
        return res.status(200).json({data:candidatesData})
    } catch (error) {
       return  res.status(501).json({error:error , message:error.message })
    }
}

module.exports = {
    getCandiates
}