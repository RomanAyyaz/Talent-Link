const appEmitter = require('../Utils/EventEmitter');
const sendOtpEmail = require('../Utils/EmailService');

appEmitter.on('userRegistered', async ({ email, fullname, otp }) => {
    try {
        await sendOtpEmail(email, fullname, otp);
        console.log(`Welcome email sent to ${email}`);
    } catch (error) {
        console.error(`Error sending email to ${email}:`, error.message);
    }
});