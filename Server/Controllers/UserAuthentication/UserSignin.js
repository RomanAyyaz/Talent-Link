require('dotenv').config()
const User = require('../../Models/UserModels/User')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const UserSignin = async (req, res) => {
    try {
        let { email, password } = req.body;
        let userData = await User.findOne({ email: email });
        if (!userData) {
            return res.status(404).json({ error: 'UserEmail does not exist' });
        }
        let UserPassword = await bcryptjs.compare(password, userData.password);
        if (!UserPassword) {
            return res.status(404).json({ error: 'Invalid password' });
        }
        const payload = {
            id: userData._id,
            email: userData.email,
            name: userData.name,
            role: userData.role
        };
        // Creating Token
        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '20h' });
        // Storing token in a http only cookies
        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'Strict' });

        if (userData && UserPassword && userData.isverfied) {
            return res.status(200).json({ Message: 'User logged in Successfully', userData, token: token });
        }
    }
        catch (error) {
            console.error('Error in UserLogin:', error);
            return res.status(500).json({ error: error.message });
        }
    };

module.exports = {
    UserSignin
}