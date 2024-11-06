require('dotenv').config()
const Company = require('../../Models/CompanyModels/Company')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const companySignIn = async (req, res) => {
    try {
        let { companyEmail, password } = req.body;
        let companyData = await Company.findOne({ companyEmail: companyEmail });
        if (!companyData) {
            return res.status(404).json({ error: 'Company Email does not exist' });
        }
        let companyPassword = await bcryptjs.compare(password, companyData.password);
        if (!companyPassword) {
            return res.status(404).json({ error: 'Invalid password' });
        }
        const payload = {
            id: companyData._id,
            email: companyData.email,
            name: companyData.name,
        };
        // Creating Token
        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '20h' });
        // Storing token in a http only cookies
        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'Strict' });

        if (companyData && companyPassword && companyData.isOtpVerified) {
            return res.status(200).json({ Message: 'Company logged in Successfully', companyData, token: token });
        }
    }
        catch (error) {
            console.error('Error in Company Login:', error);
            return res.status(500).json({ error: error.message });
        }
    };

module.exports = {
    companySignIn
}