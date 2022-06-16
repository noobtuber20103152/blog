const Post = require("../model/post")
const connectToMongo = require('../connect/connect');
connectToMongo();
export default async function fetchsingledata(req, res) {
    const title = req.headers['title'];
    console.log(title)
    let data = await Post.find({ "title": title });
    console.log(data)
    res.json(data);
    // console.log(data)

} 