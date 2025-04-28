const express = require('express');
const { updatePref } = require('../../Controllers/JobCopilot/AddPref');
const Router = express.Router();


Router.post('/addPref/:id', updatePref)

module.exports = Router