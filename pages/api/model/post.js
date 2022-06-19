const mongoose = require("mongoose")
const postSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    shortdesc: {
        type: String,
        required: true
    },
    longdesc: {
        type: Array,
        item: {
            type: String
        },
        required: true
    },
    bgimage: {
        type: String,
        required: true
    },
    otherimages: {
        type: Array,
        items: {
            type: String
        }
    },
    tags: {
        type: Array,
        items: {
            type: String
        }
    },
}, { timestamps: true })
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
module.exports = Post;