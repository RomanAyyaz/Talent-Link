const Company = require('../../Models/CompanyModels/Company')
const OtpVerification = async (req, res) => {
    const { companyEmail, otp } = req.body;
    try {
        let companyData = await Company.findOne({ companyEmail: companyEmail });
        if (!companyData) {
            return res.status(404).json({ message: 'Company not found' });
        }
        if (companyData.otp === otp) {
            companyData.isOtpVerified = true;
            companyData.otp = null;
            await companyData.save();
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