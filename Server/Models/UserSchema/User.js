const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        required:true
    },
    isverfied:{
        type:Boolean,
        default:false
    }      
},{timestamps:true})

const User = mongoose.model('User',UserSchema)

module.exports = User