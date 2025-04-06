const express = require('express');
const { postJob } = require('../../Controllers/Job/PostJob');
const { allJobs } = require('../../Controllers/Job/AllJobs');
const { deleteJob } = require('../../Controllers/Job/DeleteJob');
const { jobData } = require('../../Controllers/Job/JobData');
const { updateJob } = require('../../Controllers/Job/UpdateJob');
const { addApplication } = require('../../Controllers/Job/AddApplication');
const { getCandiates } = require('../../Controllers/Job/GetCandidates');
const { hasUserApplied } = require('../../Controllers/Job/HasUserApplied');
const { updateJobStatus } = require('../../Controllers/Job/UpdateJobStatus');
const { candidateJobData } = require('../../Controllers/Job/CandidateJobData');
const { scheduleInterview } = require('../../Controllers/Job/ScheduleInterview');
const { updatePipeline } = require('../../Controllers/Job/UpdatePipeline');
const { UserAppliedJobs } = require('../../Controllers/Job/UserAppliedJobs');
const { candidateShortlist } = require('../../Controllers/Job/CandidateShortlist');
const { jobAlertSub } = require('../../Controllers/Job/JobAlertSub');

const Router = express.Router();


//Route for adding the 
Router.post('/postJob',postJob)
//Routes for getting all the jobs for a specific company will change this route later
Router.get('/allJobs',allJobs)
//Route for deleting a job
Router.delete('/deleteJob/:id',deleteJob)
//Route for getting the data of a specific job
Router.get('/jobData/:id',jobData)
//Route for updating the job data
Router.put('/updateJob/:id',updateJob)
//Route for getting all the data of jobs
Router.get('/allJobs',allJobs)
//Router for adding application to the job
Router.post('/addApplication',addApplication)
//Route for getting the candidates for the specific job
Router.get('/candidates/:id',getCandiates)
//Route for checking that user has applied for the job or not
Router.get('/hasApplied/:userId/:jobId',hasUserApplied)
//Route for updating the job application status
Router.put('/updateStatus/:userId/:jobId' , updateJobStatus)
//Api for getting the job and candidate data for hiring pipeline
Router.get('/candidateJobData/:candidateId/:jobId' , candidateJobData)
//Api for secdule the interview 
Router.put('/scheduleInterview/:candidateId/:jobId',scheduleInterview)
//Api for updating the pipeline 
Router.put('/updatePipeline/:userId/:jobId' , updatePipeline)
//Api for getting the data of user Applied jobs
Router.get('/appliedJobs/:userId',UserAppliedJobs)
//Api for getting the data of shortlisted candidates
Router.get('/candidateShortlist' , candidateShortlist )
//Api for Job Alert 
Router.post('/subscribe' , jobAlertSub)

module.exports = Router