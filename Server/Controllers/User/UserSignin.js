require('dotenv').config()
const User = require('../../Models/UserSchema/User')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const UserSignin = async (req,res)=>{
    try {
        let {email,password} = req.body
        let userData = await User.findOne({email:email})
        if(!userData){
            res.status(404).json({Message:'UserEmail does not exits'})
        }
        let UserPassword = await bcryptjs.compare(password,userData.password)
        if(!UserPassword){
            res.status(404).json({Message:'Invalid password'})
        }
        const payload = {
            id:userData._id,
            email:userData.email,
            name:userData.name,
            role:userData.role
        }
        //Creating Token
        const token = jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:'20h'})
        //Stroing token in a http only cookies
        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'Strict' });
        if(userData && UserPassword && userData.isverfied){
            res.status(200).json({Message:'User logged in SuccessFully',userData,token:token})
        }
    } catch (error) {
        res.status(500).json({error:error})
    }
}
module.exports = {
    UserSignin
}