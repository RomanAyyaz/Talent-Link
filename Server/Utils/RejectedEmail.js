require('dotenv').config();
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const sendRejectionEmail = async (email, fullname) => {
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
            intro: `Thank you for applying to Talent Link. We appreciate the time and effort you put into your application.`,
            outro: `After careful consideration, we regret to inform you that we will not be moving forward with your application at this time. However, we encourage you to keep an eye on future opportunities and apply again. We truly appreciate your interest and wish you the best in your job search.`,
        },
    };

    let mail = MailGenerator.generate(response);

    let message = {
        from: process.env.EMAIL,
        to: email,
        subject: "Application Update - Thank You for Applying",
        html: mail,
    };

    await transporter.sendMail(message);
};

module.exports = sendRejectionEmail;
