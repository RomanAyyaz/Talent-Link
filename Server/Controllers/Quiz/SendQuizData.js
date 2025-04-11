const Test = require('../../Models/TestModel/Test')


const sendQuizData = async(req,res)=>{
    try {
        const { studentId, correctAnswers, wrongAnswers, isDisqualified, startTime, endTime , jobId } = req.body;
        console.log(req.body)
        const testAttempt = new Test({
          studentId,
          jobId,
          correctAnswers,
          wrongAnswers,
          isDisqualified,
          startTime,
          endTime
        });
        await testAttempt.save();
        res.status(200).json({ message: 'Test attempt saved successfully' });
      } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: 'Error saving test attempt', error: error.message });
      }
}


module.exports = {
    sendQuizData
}