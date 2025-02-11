require('dotenv').config();
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');

const sendInterviewEmail = async (email, fullname, interviewType, interviewDate, interviewTime, interviewExpectations) => {
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
            name: "Talent Link",
            link: 'https://yourwebsite.com',
        },
    });

    let response = {
        body: {
            name: fullname,
            intro: "Your interview has been successfully booked!",
            table: {
                data: [
                    { "Interview Type": interviewType },
                    { "Date": interviewDate },
                    { "Time": interviewTime },
                    { "Expectations":  interviewExpectations || "Not provided" }
                ],
            },
            outro: "Best of luck for your interview! Feel free to contact us if you have any questions."
        },
    };

    let mail = MailGenerator.generate(response);

    let message = {
        from: process.env.EMAIL,
        to: email,
        subject: "Interview Booking Confirmation",
        html: mail,
    };

    await transporter.sendMail(message);
};

module.exports = sendInterviewEmail;
