const connectToMongo = require('../connect/connect');
connectToMongo();
const Comment = require("../model/comment")
export default async function upload(req, res) {
    const title = req.headers['title'];
    // console.log(title);
    let data = await Comment.find({ title: title });
    // console.log(data);
    data.reverse();
    res.json(data);
}