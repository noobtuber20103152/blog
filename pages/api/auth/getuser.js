
const connectToMongo = require('../connect/connect');
const User = require("../model/user")
connectToMongo();
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Ujjawalisagoodb$oy';
export default async function getuser(req, res) {
    const token = req.headers['token'];
    // console.log(token);
    // console.log(token)
    try {
        if (token) {
            jwt.verify(token, JWT_SECRET, async (err, decoded) => {
                if (err) return res.json({ isLoggedIn: false, message: "Authentication failed" });
                // console.log(decoded);
                req.user = {};
                req.user.id = decoded.id;
                req.user.username = decoded.username;
                req.user.about = decoded.about;
                let userdata = await User.findOne({ username: decoded.username });
                return res.json({ isLoggedIn: true, message: "Authentication successfully", username: decoded.username, about: userdata.about, image: userdata.image });
            })
        }
        else {
            return res.json({ isLoggedIn: false, message: "Authentication failed" });
        }
    } catch (error) {
        res.json({ isLoggedIn: false, message: "Internal server error", error: error.message });
    }
}