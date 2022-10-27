const connectToMongo = require('../connect/connect');
connectToMongo();
const Comment = require("../model/comment")
export default async function upload(req, res) {
    if (req.method == "POST") {
        try {
            const commentData = req.body;
            const savedPost = new Comment({
                author: commentData.author,
                title: commentData.title,
                image: commentData.image,
                message: commentData.message
            })
            const responseData = await savedPost.save();
            res.json({ success: "success", responseData })

        } catch (error) {
            res.json({ error: error.message })
        }
    }
}