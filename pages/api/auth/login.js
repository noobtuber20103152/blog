
const User = require("../model/user")
const connectToMongo = require('../connect/connect');
connectToMongo();
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Ujjawalisagoodb$oy';
export default async function login(req, res) {
    if (req.method === "POST") {
        try {
            const userLoggingIn = req.body;
            console.log(req.body)
            User.findOne({ username: userLoggingIn.username })
                .then(dbUser => {
                    if (!dbUser) {
                        return res.json({
                            status: 400
                        })
                    }
                    bcrypt.compare(userLoggingIn.password, dbUser.password)
                        .then(isCorrect => {
                            if (isCorrect) {
                                console.log(isCorrect)
                                const payload = {
                                    id: dbUser._id,
                                    username: dbUser.username,
                                }
                                jwt.sign(
                                    payload,
                                    JWT_SECRET,
                                    { expiresIn: 86400 },
                                    (err, token) => {
                                        if (err) return res.json({ status: 400 })
                                        return res.json({
                                            status: 200,
                                            token: token
                                        })
                                    }
                                )
                            }
                            else {
                                return res.json({ status: 400 })
                            }
                        })
                })
        } catch (err) {
            res.json({ error: err.message })

        }
    }
}