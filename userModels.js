const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String || Number,
        required: true
    }
},{
    timestamps: true
})


module.exports = mongoose.model('users', userSchema)