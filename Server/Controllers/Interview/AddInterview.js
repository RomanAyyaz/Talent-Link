const Interview = require('../../Models/InterviewModels/interview')
const User= require('../../Models/UserModels/User')
const sendInterviewEmail = require('../../Utils/InterviewEmail');
const AddInterview = async (req,res)=>{
    const {id} = req.params
    let userData = await User.findById(id);
    if(!userData){
        return res.status(40).json({ message: 'No user found'});
    }
    const email = userData.email
    const  fullname = userData.fullname
    const {interviewType , interviewDate , interviewTime , interviewExpectations } = req.body
    try {
        const newInterview = new Interview({
            interviewType , interviewDate , interviewTime , interviewExpectations ,
            user: id
          });
          await newInterview.save();
          await sendInterviewEmail(email , fullname , interviewType , interviewDate , interviewTime , interviewExpectations )
          return res.status(201).json({ message: 'Course has been created' , interview:newInterview });
    } catch (error) {
        res.status(500).json({error:error})
    }

}


module.exports = {
    AddInterview
}