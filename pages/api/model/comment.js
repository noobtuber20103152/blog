const mongoose = require("mongoose")
const commentSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }

}, { timestamps: true })
const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema);
module.exports = Comment;