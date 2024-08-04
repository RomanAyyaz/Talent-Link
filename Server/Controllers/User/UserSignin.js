const User = require('../../Models/UserSchema/User')
const bcryptjs = require('bcryptjs')
const UserSignin = async (req,res)=>{
    try {
        let {email,password} = req.body
        let userData = await User.findOne({email:email})
        if(!userData){
            res.status(400).json({Message:'UserEmail does not exits'})
        }
        let UserPassword = await bcryptjs.compare(password,userData.password)
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