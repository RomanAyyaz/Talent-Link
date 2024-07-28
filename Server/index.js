require('./Database/db')
const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
const cors = require('cors')

app.use(cors())
app.use(express.json())


app.listen(port,()=>{
    console.log(`Listening at port number ${port}`)
})