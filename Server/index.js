require('./Database/db')
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8000;
const cors = require('cors')
const UserRoute = require('./Routes/User/UserRoute')
const CourseRoute = require('./Routes/Course/Course')
const JobRoute = require('./Routes/Job/Job')
const CompanyRoutes = require('./Routes/Company/CompanyRoutes')
const cookieParser = require('cookie-parser');

// Middlewares
app.use('/public', express.static(path.resolve(__dirname, './public')));
app.use(express.static(path.resolve("./public")))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(cookieParser())

//Starting the Server
app.listen(port,()=>{
    console.log(`Listening at port number ${port}`)
})

//Routes for Api
app.use('/user',UserRoute)
app.use('/course',CourseRoute)
app.use('/company',CompanyRoutes)
app.use('/job',JobRoute)