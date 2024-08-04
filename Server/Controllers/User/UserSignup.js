require('dotenv').config()
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const User  = require('../../Models/UserSchema/User')
const UserSignup = async (req,res)=>{
    try {
        let {fullname , email , password ,confirmpassword } = req.body;
        //Generating otp
        let otp = Math.floor(Math.random()*10000)
        //Creating new User
        let NewUser = new User ({
            fullname,
            email,
            password,
            confirmpassword,
            otp
        })
        await NewUser.save()

        //Generating Email
    const emails = email;
      let config = {
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      };
  
      let transporter = nodemailer.createTransport(config);
  
      let MailGenerator = new Mailgen({
        theme: "default",
        product: {
          name: "Mailgen",
          link: 'https://mailgen.js/',
        },
      });
  
      let response = {
        body: {
          name: `${fullname}`,
          intro: "Your one-time OTP is:",
          table: {
            data: [{ item: otp }],
          },
        },
      };
  
      let mail = MailGenerator.generate(response);
  
      let message = {
        from: process.env.EMAIL,
        to: emails,
        subject: "One-time OTP",
        html: mail,
      };
  
      transporter.sendMail(message)
        .then(() => {
          return res.status(201).json({ msg: "You should receive an email" });
        })
        .catch(error => {
          console.error("Error sending email:", error);
          return res.status(500).json({ error: "Failed to send OTP email" });
        });   
        res.status(201).json({Message:'User Created SuccessFully'})
    } catch (error) {
        res.status(500).json({error:error})
    }
}
module.exports = {
    UserSignup
}