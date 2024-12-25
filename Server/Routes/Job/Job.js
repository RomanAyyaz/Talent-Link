const express = require('express');
const { postJob } = require('../../Controllers/Job/PostJob');
const { allJobs } = require('../../Controllers/Job/AllJobs');
const { deleteJob } = require('../../Controllers/Job/DeleteJob');

const Router = express.Router();


//Route for adding the 
Router.post('/postJob',postJob)
//Routes for getting all the jobs 
Router.get('/allJobs',allJobs)
//Route for deleting a job
Router.delete('/deleteJob/:id',deleteJob)

module.exports = Router