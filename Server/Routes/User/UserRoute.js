const express = require('express')
const Router = express.Router()
const stripe = require('stripe')(process.env.STRIPKEY); 
const {UserSignup} = require('../../Controllers/UserAuthentication/UserSignup')
const {UserSignin} = require('../../Controllers/UserAuthentication/UserSignin')
const {OtpVerification} = require('../../Controllers/UserAuthentication/OtpVerification')
const {OtpSent} = require('../../Controllers/UserAuthentication/OtpSent')
const {ChangePassword} = require('../../Controllers/UserAuthentication/PassswordChange')
const {AddResume} = require('../../Controllers/ResumeBuilder/AddResume')
const { addPersonalDetails } = require('../../Controllers/ResumeBuilder/AddPersonalDetails')
const { addSummery } = require('../../Controllers/ResumeBuilder/AddSummery')
const { addExperience } = require('../../Controllers/ResumeBuilder/AddExperience')
const { addEducation } = require('../../Controllers/ResumeBuilder/AddEducation')
const { addSkills } = require('../../Controllers/ResumeBuilder/AddSkills')
const { getResume } = require('../../Controllers/ResumeBuilder/GetResumeData')
const { themeChange } = require('../../Controllers/ResumeBuilder/ThemeChange')
const { getAllResumes } = require('../../Controllers/ResumeBuilder/GetAllResumesData')
const { deleteResume } = require('../../Controllers/ResumeBuilder/DeleteResume')
const { addCertification } = require('../../Controllers/ResumeBuilder/AddCertification')
const { addProject } = require('../../Controllers/ResumeBuilder/AddProject')
const {getAllCourses} = require('../../Controllers/Course/GetAllCourses')
const { getCourseData } = require('../../Controllers/Course/GetCourseData')
const { updateUser } = require('../../Controllers/UserProfile/UpdateUser')
const { userProjects , upload } = require('../../Controllers/UserProfile/UserProjects')
const { deleteUserProject } = require('../../Controllers/UserProfile/DeleteUserProject');
const { updateCourseStatus } = require('../../Controllers/Course/UpdateCourseStatus');

//Route to add User
Router.post('/signup',UserSignup)

//Route to update the user
Router.put('/updateUser/:id',updateUser)

//User Projects (multiple images)
Router.put('/projects/:id', upload.array('projectImages'), userProjects);

//Delete user project 
Router.delete('/projects/:userId/:projectId/deleteProject',deleteUserProject)

//Route to login User
Router.post('/signin',UserSignin)

//Route to Otp Verification
Router.post('/otpVerification',OtpVerification)

//Route to send Otp for password change
Router.put('/otpsent',OtpSent)

//Route for password change 
Router.put('/ChangePassword',ChangePassword)

//Route for Adding new Resume
Router.post('/Resume',AddResume)

//Route for adding Personal details to resume
Router.put('/Resume/:id/personaldetail',addPersonalDetails)

//Route for adding Summery to resume
Router.put('/Resume/:id/summery',addSummery)

//Route for adding Experience to resume
Router.put('/Resume/:id/experience',addExperience)

//Route for adding Education to resume
Router.put('/Resume/:id/education',addEducation)

//Route for adding certification 
Router.put('/Resume/:id/project',addProject)

//Route for adding certification 
Router.put('/Resume/:id/certification',addCertification)

//Route for adding Skills to resume
Router.put('/Resume/:id/skills',addSkills)

//Route for Changing the theme of  resume
Router.put('/Resume/:id/theme',themeChange)

//Route for getting the to resume
Router.get('/Resume/:id',getResume)

//Route for getting all the resumes 
Router.get('/Resume',getAllResumes)

//Route for Deleting the Resume
Router.delete('/Resume/:id',deleteResume)


                    //    User courses routes
//Route for all courses 
Router.get('/courses',getAllCourses)

//Route for getting the data of specific course

Router.get('/courseData/:id',getCourseData)

//Route for updating the courses bought status

Router.put('/updateCourseStatus/:id',updateCourseStatus)

//Checkout
Router.post("/checkout", async (req, res) => {
    try {
      const { course } = req.body;
  
      if (!course) {
        return res.status(400).json({ error: "Course data is required" });
      }
  
      const priceInCents = Math.round(parseFloat(course.price) * 100);
  
      const imageUrl = course.imageUrl.startsWith("http")
        ? course.imageUrl
        : `http://localhost:8000${course.imageUrl}`;

  
      const lineItems = [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: course.title,
              description: course.description,
              images: [imageUrl],
            },
            unit_amount: priceInCents,
          },
          quantity: 1,
        },
      ];
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: "http://localhost:3000/cancel",
        metadata: {
          courseId: course._id,
          instructor: course.instructor,
        },
      });
  
      res.json({ id: session.id });
    } catch (error) {
      console.error("Error creating Stripe session:", error);
      res.status(500).json({ error: "Failed to create Stripe session" });
    }
  });
  
Router.get("/checkout-session/:sessionId", async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.retrieve(req.params.sessionId);
      res.json({ courseId: session.metadata.courseId });
    } catch (error) {
      console.error("Error retrieving session:", error);
      res.status(500).json({ error: "Failed to fetch session details" });
    }
  });
  

module.exports = Router

