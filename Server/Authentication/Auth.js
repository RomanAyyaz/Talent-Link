require('dotenv').config()
const jwt = require('jsonwebtoken')

//User Authentication middleware
const userAuth = (req,res,next)=>{
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
    try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded.userId;
    next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
}

module.exports = {
    userAuth
}