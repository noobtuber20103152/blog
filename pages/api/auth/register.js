
const connectToMongo = require('../connect/connect');
connectToMongo();
const User = require("../model/user")
const bcrypt = require("bcrypt")
export default async function register(req, res) {
    if (req.method === "POST") {
        try {
            const user = req.body;
            console.log(user);
            if (user == undefined) {
                res.json({ status: 400 });
            }
            const takenUsername = await User.findOne({ username: user.username });
            const takenEmail = await User.findOne({ email: user.email })
            if (takenUsername || takenEmail) {
                res.json({ status: 400 });
            }
            else {
                user.password = await bcrypt.hash(req.body.password, 10);
                const dbUser = new User({
                    username: user.username,
                    email: user.email,
                    password: user.password,
                    image: user.image,
                    about:user.about
                })
                dbUser.save();
                res.json({ status: 200, userInfo: {dbUser}})
            }

        } catch (error) {
            res.json({ msg: error.message })
        }
    }
}
