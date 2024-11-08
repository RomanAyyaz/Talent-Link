const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const companySchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
    companyEmail:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    otp:{
        type:Number
    },
    isOtpVerified:{
        type:Boolean,
        default:false
    },
    industry:{
        type:String
    },
    companyDescription:{
        type:String
    },
    companyLogo:{
        type:String
    },
    companyAddress:{
        type:String
    }
})
companySchema.pre('save', async function(next){
    if(this.isModified('password')){
    this.password = await bcryptjs.hash(this.password,10)
    }
    next()
})

const Company = mongoose.model('company',companySchema)
module.exports = Company;