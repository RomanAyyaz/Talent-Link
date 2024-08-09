const User = require('../../Models/UserSchema/User');
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

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
      
        // Generating Email
        const emails = useremail;
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

        await transporter.sendMail(message); 
        return res.status(200).json({ msg: "You should receive an email" });

    } catch (error) {
        console.error("Error:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    OtpSent
};
