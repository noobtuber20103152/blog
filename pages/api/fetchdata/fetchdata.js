const Post = require("../model/post")
const connectToMongo = require('../connect/connect');
connectToMongo();
export default async function fetchdata(req, res) {
    if (req.method == "GET") {
        let fetchalldata = await Post.find({});
        // console.log(fetchalldata);
        res.json(fetchalldata);
    }
} 