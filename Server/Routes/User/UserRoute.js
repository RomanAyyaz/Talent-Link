const express = require('express')
const Router = express.Router()
const {UserSignup} = require('../../Controllers/User/UserSignup')
const {UserSignin} = require('../../Controllers/User/UserSignin')
//Route to add User
Router.post('user',UserSignup)
//Route to login User
Router.get('user',UserSignin)
module.exports = Router

