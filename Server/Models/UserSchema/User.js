const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
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
    otp:{
        type:Number,
    },
    isverfied:{
        type:Boolean,
        default:false
    },
    type:{
        type:String,
        default:'student'
    }     
},{timestamps:true})

UserSchema.pre('save', async function(next){
    if(this.isModified('password')){
    this.password = await bcryptjs.hash(this.password,10)
    }
    next()
})
const User = mongoose.model('User',UserSchema)

module.exports = User