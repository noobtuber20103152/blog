const Post = require("../model/post")
const connectToMongo = require('../connect/connect');
connectToMongo();
export default async function fetchsingledata(req, res) {
    const author = req.headers['author'];
    console.log(author)
    let data = await Post.find({ "author": author });
    // console.log(data)
    res.json(data);
} 