const Job = require('../../Models/JobModels/Job')


const jobData = async(req,res)=>{
    let{id} = req.params;
    try {
        let data = await Job.findById(id);
        if(!data){
            return res.status(400).json({message:"This job data does not exists"})
        }
        return res.status(200).json({data:data})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = {
    jobData
}