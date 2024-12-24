const express = require('express');
const { postJob } = require('../../Controllers/Job/PostJob');

const Router = express.Router();


//Route for adding the 
Router.post('/postJob',postJob)


module.exports = Router