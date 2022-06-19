const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    }
}, { timestamps: true })
const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = User;