
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Ujjawalisagoodb$oy';
export default async function getuser(req, res) {
    const token = req.headers['token'];
    console.log(token);
    try {
        if (token) {
            jwt.verify(token, JWT_SECRET, (err, decoded) => {
                if (err) return res.json({ isLoggedIn: false, message: "Authentication failed" });
                req.user = {};
                req.user.id = decoded.id;
                req.user.username = decoded.username;
                return res.json({ isLoggedIn: true, message: "Authentication successfully" });
            })
        }
        else {
            return res.json({ isLoggedIn: false, message: "Authentication failed" });
        }
    } catch (error) {
        res.json({ isLoggedIn: false, message: "Internal server error", error: error.message });
    }
}