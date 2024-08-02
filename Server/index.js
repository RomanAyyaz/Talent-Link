require('./Database/db')
const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
const cors = require('cors')
const UserRoute = require('./Routes/User/UserRoute')

app.use(cors())
app.use(express.json())


app.listen(port,()=>{
    console.log(`Listening at port number ${port}`)
})

app.use('/',UserRoute)