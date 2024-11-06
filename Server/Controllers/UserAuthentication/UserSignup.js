require('dotenv').config();
const User = require('../../Models/UserModels/User');
const sendOtpEmail = require('../../Utils/EmailService');

const UserSignup = async (req, res) => {
    try {
        let { fullname, email, password } = req.body;

        // Generating OTP
        let otp = Math.floor(Math.random() * 10000);

        // Creating new User
        let NewUser = new User({
            fullname,
            email,
            password,
            otp,
        });

        await NewUser.save();

        // Sending OTP Email
        await sendOtpEmail(email, fullname, otp);

        res.status(201).json({ Message: 'User Created Successfully. You should receive an email' });

    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    UserSignup
};
