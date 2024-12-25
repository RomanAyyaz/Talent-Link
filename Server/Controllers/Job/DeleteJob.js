const Job = require('../../Models/JobModels/Job')

const deleteJob = async(req,res)=>{
    try {
        let {id} = req.params;
        let deletedjob = await Job.findByIdAndDelete(id);
        if (!deletedjob) {
            return res.status(404).json({ message: 'Job not found' });
        }

        return res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        return res.status(500).json({error:error})
    }
}

module.exports = {
    deleteJob
}