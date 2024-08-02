const User  = require('../../Models/UserSchema/User')
const UserSignup = async (req,res)=>{
    try {
        let {fullname , email , password ,confirmpassword } = req.body;
        let otp = Math.floor(Math.random()*100000)
        let NewUser = new User ({
            fullname,
            email,
            password,
            confirmpassword,
            otp
        })
        await NewUser.save()   
    } catch (error) {
        res.status(500).json({error:error})
    }
}
module.exports = {
    UserSignup
}