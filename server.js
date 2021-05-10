require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRouter = require("./routes/userRouter")
const noteRouter = require("./routes/noteRouter")

const app = express()

app.use(express.json())
app.use(cors())
// routes
app.use('/users', userRouter)
app.use('/api/notes', noteRouter)

//listen server
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('Server is running on port' , PORT)
})

const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err =>{
    if(err) throw err;
    console.log('yippe connected to database')
})