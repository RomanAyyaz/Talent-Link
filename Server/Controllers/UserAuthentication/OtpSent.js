// controllers/userController.js

const User = require('../../Models/UserModels/User');
const sendOtpEmail = require('../../Utils/EmailService');

const OtpSent = async (req, res) => {
    let { useremail } = req.body;
    try {
        let otp = Math.floor(Math.random() * 10000);
        let UserData = await User.findOne({ email: useremail });

        if (!UserData) {
            return res.status(404).json({ error: 'User Email does not exist' });
        }

        let fullname = UserData.fullname;
        UserData.otp = otp;
        await UserData.save();

        await sendOtpEmail(useremail, fullname, otp);

        return res.status(200).json({ msg: "You should receive an email" });

    } catch (error) {
        console.error("Error:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    OtpSent
};
