require('./Database/db')
const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
const cors = require('cors')
const UserRoute = require('./Routes/User/UserRoute')

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//Starting the Server
app.listen(port,()=>{
    console.log(`Listening at port number ${port}`)
})

//Routes for Api
app.use('/',UserRoute)