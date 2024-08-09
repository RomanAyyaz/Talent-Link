const User = require('../../Models/UserSchema/User')
const bcryptjs = require('bcryptjs')
const ChangePassword = async (req,res)=>{
   let {email,password} = req.body
   try {
    let userData = await User.findOne({ email: email });
    if (!userData) {
        return res.status(404).json({ error: 'UserEmail does not exist' });
    }
    let changedPassword = await bcryptjs.hash(password,10)
    userData.password = changedPassword;
    await userData.save();
    return res.status(201).json({Message:"Password changed SuccessFully"})
   } catch (error) {
    return res.status(500).json({ error: error.message });
   }
}

module.exports = {
    ChangePassword
}