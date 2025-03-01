require('dotenv').config();
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const sendShortlistedEmail = async (email, fullname) => {
    // Email configuration
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    // Mailgen configuration
    let MailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Talent Link",
            link: 'https://yourwebsite.com',
            logo: 'https://yourwebsite.com/logo.png',
            copyright: 'Talent Link © 2025'
        },
    });

    let response = {
        body: {
            name: fullname,
            intro: `We are pleased to inform you that your application has been shortlisted!`,
            action: {
                instructions: "Please visit our website for further updates:",
                button: {
                    color: "#22BC66",
                    text: "View Details",
                    link: "https://yourwebsite.com/dashboard"
                },
            },
            outro: "Feel free to reach out if you have any questions. Best of luck!"
        },
    };

    let mail = MailGenerator.generate(response);

    let message = {
        from: process.env.EMAIL,
        to: email,
        subject: "Application Shortlisted - Next Steps",
        html: mail,
    };

    await transporter.sendMail(message);
};

module.exports = sendShortlistedEmail;
