require('dotenv').config();
const Company = require('../../Models/CompanyModels/Company')
const sendOtpEmail = require('../../Utils/EmailService');

const companySignup = async (req, res) => {
    try {
        let { companyName, companyEmail, password } = req.body;
    
        // Generating OTP
        let otp = Math.floor(Math.random() * 10000);

        // Creating new User
        let newCompany = new Company({
            companyName,
            companyEmail,
            password,
            otp,
        });

        await newCompany.save();
        
        // Sending OTP Email
        await sendOtpEmail(companyEmail, companyName, otp);

        res.status(201).json({ Message: 'Company Created Successfully. You should receive an email' });

    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    companySignup
};
