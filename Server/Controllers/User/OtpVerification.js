const User = require('../../Models/UserSchema/User')
const OtpVerification = async (req, res) => {
    const { email, otp } = req.body;
    try {
        let userData = await User.findOne({ email: email });
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (userData.otp === otp) {
            userData.isverfied = true;
            userData.otp = null;
            await userData.save();
            return res.status(200).json({ message: 'Otp Verified' });
        } else {
            return res.status(400).json({ message: 'Invalid Otp' });
        }
    } catch (error) {
        console.error('Error during OTP verification:', error);
        return res.status(500).json({ Error: error.message });
    }
};

module.exports ={
    OtpVerification
}