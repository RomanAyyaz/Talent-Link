const mongoose = require('mongoose')
const projectSchema = new mongoose.Schema({
    projectName: String,
    projectUrl: String,
    projectDescription: String,
    projectStartDate: Date,
    projectEndDate: Date,
    projectImages: [String]
  });
  
  const representativeSchema = new mongoose.Schema({
    name: {
      type: String,
    //   required: true
    },
    email: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    }
  });
  
  const companySchema = new mongoose.Schema({
    companyName: {
      type: String,
      required: true
    },
    companyEmail: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    otp: {
      type: Number
    },
    isOtpVerified: {
      type: Boolean,
      default: false
    },
  
    // Company Basic Information
    industry: {
      type: String
    },
    companyDescription: {
      type: String
    },
    companyLogo: {
      type: String
    },
    companyAddress: {
      type: String
    },
  
    // Business Overview
    mission: String,
    vision: String,
    values: String,
  
    // Social media links
    socialMediaLinks: {
      linkedin: String,
      twitter: String,
      facebook: String,
      instagram: String,
      websiteUrl: String
    },
  
    // Company Representatives
    reprsentative: [representativeSchema],
  
    // Company Projects
    projects: [projectSchema]
  
  }, { timestamps: true });
  
  companySchema.pre('save', async function (next) {
    if (this.isModified('password')) {
      this.password = await bcryptjs.hash(this.password, 10)
    }
    next();
  });
  
  const Company = mongoose.model('company', companySchema);
  module.exports = Company;
  