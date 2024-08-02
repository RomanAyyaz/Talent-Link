const User = require('../../Models/UserSchema/User')
const bcryptjs = require('bcryptjs')
const UserSignin = async (req,res)=>{
    try {
        let {email,password} = req.body
        let userData = User.find({email:email})
        let UserPassword = bcryptjs.compare(password,userData.password)
        if(!userData){
            res.status(400).json({Message:'UserEmail does not exits'})
        }
        if(!UserPassword){
            res.status(400).json({Message:'Invalid password'})
        }
        if(userData && UserPassword ){
            res.status(201).json({Message:'User logged in SuccessFully',userData})
        }
    } catch (error) {
        res.status(500).json({error:error})
    }
}
module.exports = {
    UserSignin
}