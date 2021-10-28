require("dotenv").config();

const bcrypt = require("bcrypt");
const User = require("../models/user");

const UserProfile = require("../models/userProfile");

const jwt = require("jsonwebtoken");

class UserController {
    static async signUp(req, res, next) {
        const { email, password, userGender, phoneNumber, userName } = req.body;

        const emailRegexp =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

        const validatingEmail = await emailRegexp.test(email);
        const validatingPassword = await passwordRegexp.test(password);
        const existCheck = await User.findOne({
            email,
        });

        if (validatingEmail == false) {
            next({ name: "WRONG_EMAIL_FORMAT" });
        } else if (validatingPassword == false) {
            next({ name: "WRONG_PASSWORD_FORMAT" });
        } else {
            if (existCheck) {
                next({ name: "ALREADY_EXIST" });
            } else {
                const user = new User({
                    email,
                    password,
                });

                const userProfile = new UserProfile({
                    userGender,
                    userName,
                    phoneNumber,
                    _userId: user._id,
                });

                await user.save();
                await userProfile.save();

                res.status(201).json({
                    success: true,
                })
            }
        }
    }

    static async signIn(req, res, next) {
        const { email, password } = req.body;
        const checkingUser = await User.findOne({ email });

        // ###############


        if (checkingUser && bcrypt.compareSync(password, checkingUser.password)) {

            const access_token = jwt.sign(
                {
                    _id: checkingUser._id,
                },
                process.env.JWT_PASS
            );

            await UserProfile.findOneAndUpdate({
                _userId: checkingUser._id
            }, {
                $set: {
                    lastActivity: Date.now()
                }
            })

            res.status(201).json({
                success: true,
                checkingUser: {
                    email: checkingUser.email,
                },
                access_token,
            });

        } else {
            next({ name: "NOT_FOUND" });
        }


        // ###############

    }

}

module.exports = UserController;
