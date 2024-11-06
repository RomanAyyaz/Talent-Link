require('dotenv').config();
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const sendOtpEmail = async (email, fullname, otp) => {
    // Email configuration
    let config = {
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    };

    let transporter = nodemailer.createTransport(config);

    // Mailgen configuration
    let MailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Mailgen",
            link: 'https://mailgen.js/',
        },
    });

    let response = {
        body: {
            name: fullname,
            intro: "Your one-time OTP is:",
            table: {
                data: [{ item: otp }],
            },
        },
    };

    let mail = MailGenerator.generate(response);

    let message = {
        from: process.env.EMAIL,
        to: email,
        subject: "One-time OTP",
        html: mail,
    };

    await transporter.sendMail(message);
};

module.exports = sendOtpEmail;
