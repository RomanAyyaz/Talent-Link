const express = require('express');
const { getQuiz } = require('../../Controllers/Quiz/GetQuiz');
const { sendQuizData } = require('../../Controllers/Quiz/SendQuizData');
const Router = express.Router();


Router.get('/quiz' , getQuiz)

Router.put('/quizData' , sendQuizData)

module.exports = Router