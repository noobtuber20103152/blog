
const connectToMongo = require('../connect/connect');
connectToMongo();
const Post = require("../model/post")
export default async function uploadpost(req, res) {
    if (req.method == "POST") {
        try {
            const Postdata = req.body;
            // console.log(Postdata)
            const savedPost = new Post({
                author: Postdata.author,
                title: Postdata.title,
                shortdesc: Postdata.shortdesc,
                longdesc: Postdata.longdesc,
                bgimage: Postdata.bgimage,
                otherimages: Postdata.otherimages,
                tags: Postdata.tags,
                token: Postdata.token
            })
            // console.log(savedPost)
            const responseData = await savedPost.save();
            res.json({ success: "success", responseData })
        } catch (error) {
            res.json({ error: error.message })
        }
    }
}