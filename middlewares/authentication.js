require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const { access_token } = req.headers;
    if (access_token) {
        jwt.verify(access_token, process.env.JWT_PASS, (err, decoded) => {
            if (err) {
                next({ name: "INVALID_TOKEN" });
            } else {
                req._id = decoded._id;
                next();
            }
        });
    } else {
        next({ name: "MISSING_TOKEN" });
    }
};
