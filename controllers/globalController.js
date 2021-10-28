require("dotenv").config();

const bcrypt = require("bcrypt");
const User = require("../models/user");
const UserProfile = require("../models/userProfile");
const Inbox = require("../models/inbox");

const jwt = require("jsonwebtoken");

class GlobalController {

    static async sendFeedback(req, res, next) {
        const { email, message } = req.body;

        const emailRegexp =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        const validatingEmail = await emailRegexp.test(email);


        if (validatingEmail == false) {
            next({ name: "WRONG_EMAIL_FORMAT" });
        } else {

            const newMessage = new Inbox({
                email,
                message,
            });

            await newMessage.save();

            res.status(201).json({
                success: true,
                message: 'thanks for reaching me'
            })

        }
    }



    // ###############


}

module.exports = GlobalController;
