var router = require('express').Router();
const User = require("../model/user")
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Ujjawalisagoodb$oy';
router.post("/register", async (req, res) => {
    const user = req.body;
    console.log(user)
    if (user == undefined) {
        res.json("username or password should not be empty");
    }
    const takenUsername = await User.findOne({ username: user.username });
    const takenEmail = await User.findOne({ email: user.email })
    if (takenUsername || takenEmail) {
        res.json({ message: "Username or email has already been taken" });
    }
    else {
        user.password = await bcrypt.hash(req.body.password, 10);
        const dbUser = new User({
            username: user.username.toLowerCase(),
            email: user.email.toLowerCase(),
            password: user.password
        })
        dbUser.save();
        res.json({ message: "Success" })
    }
})

router.post('/login', (req, res) => {
    try {
        const userLoggingIn = req.body;
        User.findOne({ username: userLoggingIn.username })
            .then(dbUser => {
                if (!dbUser) {
                    return res.json({
                        message: "Invalid Username or Password"
                    })
                }
                bcrypt.compare(userLoggingIn.password, dbUser.password)
                    .then(isCorrect => {
                        if (isCorrect) {
                            const payload = {
                                id: dbUser._id,
                                username: dbUser.username,
                            }
                            jwt.sign(
                                payload,
                                JWT_SECRET,
                                { expiresIn: 86400 },
                                (err, token) => {
                                    if (err) return res.json({ message: "Error" })
                                    return res.json({
                                        message: "Sucess",
                                        token: token
                                    })
                                }
                            )
                        }
                        else {
                            return res.json({
                                message: "Invalid Username or Password"
                            })
                        }
                    })
            })
    } catch (err) {
        console.log(err.message)

    }
})


function verifyJWT(req, res, next) {
    try {
        const token = req.header('token')
        if (token) {
            jwt.verify(token, JWT_SECRET, (err, decoded) => {
                if (err) return res.json({
                    isLoggedIn: false,
                    message: "Failed To Authenticate"
                })
                req.user = {};
                req.user.id = decoded.id;
                req.user.username = decoded.username;
                next()
            })
        }
        else {
            res.json({ message: "Incorrect Token Given", isLoggedIn: false })
        }
    } catch (error) {
        console.log(error.message)
    }
}
router.get("/getuser", verifyJWT, (req, body) => {
    res.json({ isLoggedIn: true, username: req.user.username })
})
module.exports = router;