require('dotenv').config();
const Job = require('../../Models/JobModels/Job');
const JobAlert = require('../../Models/JobModels/JobAlert');
const nodemailer = require('nodemailer');

const postJob = async (req, res) => {
    let {
        jobTitle, jobDescription, workingSchedule, workingDays,
        salaryMin, salaryMax, experience, qualification,
        employmentType, location
    } = req.body;

    try {
        let jobData = new Job({
            jobTitle, jobDescription, workingSchedule, workingDays,
            salaryMin, salaryMax, experience, qualification,
            employmentType, location
        });

        await jobData.save();

        // ✅ Find subscribers for this job title
        const subscribers = await JobAlert.find({ jobType: { $regex: new RegExp(jobTitle, 'i') } });

        // ✅ Email config using nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD, 
            }
        });

        // ✅ Send email to each subscriber
        for (let subscriber of subscribers) {
            const mailOptions = {
                from: process.env.EMAIL,
                to: subscriber.email,
                subject: `New Job Alert: ${jobTitle}`,
                text: `Hello,\n\nA new job matching your interest has been posted:\n\nTitle: ${jobTitle}\nLocation: ${location}\n\nDescription: ${jobDescription}\n\nVisit our website to apply now.\n\nThanks!`
            };

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.error('Email error:', err);
                } else {
                    console.log('Email sent to:', subscriber.email);
                }
            });
        }

        // ✅ Return response
        return res.status(201).json({ data: jobData, message: "Job added and emails sent to subscribers" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: error });
    }
};

module.exports = {
    postJob
};
