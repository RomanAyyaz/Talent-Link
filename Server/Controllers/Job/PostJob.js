const Job = require('../../Models/JobModels/Job')
const postJob = async (req,res) =>{
    let {jobTitle,jobDescription,workingSchedule, workingDays , salaryMin ,
        salaryMax , experience ,  qualification

    } = req.body;
    try {
        let jobData= new Job({
            jobTitle,jobDescription,workingSchedule, workingDays , salaryMin ,
        salaryMax , experience ,  qualification
        })
        await jobData.save();
        return res.status(201).json({data:jobData,message:"Job added successfully in databse"})
    } catch (error) {
        return res.status(500).json({error:error})
    }
}

module.exports = {
    postJob
}