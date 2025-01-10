const User = require('../../Models/UserModels/User')
const updateUser =async (req,res)=>{
    let {id} = req.params;
     let data = req.body
     console.log(data)
     try {
        let updateUser = await User.findByIdAndUpdate(id,{$set:data},{new:true})
        return res.status(201).json({message:"User profile updated successfully "})
     } catch (error) {
        return res.status(501).json({error:error})
     }
    
}
module.exports = {
    updateUser
}