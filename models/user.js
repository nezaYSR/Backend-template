const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true, lowercase: true },
        password: { type: String, required: true },
        resetLink: { data: String, default: "" },
    },
    { timestamps: true }
);

userSchema.pre("save", function (next) {
    User.findOne({ email: this.email })
        .then((user) => {
            if (user) {
                next({ error: "ALREADY_EXIST" });
            } else {
                const salt = bcrypt.genSaltSync(10);
                this.password = bcrypt.hashSync(this.password, salt);
                next();
            }
        })
        .catch(next);
});

const User = mongoose.model("User", userSchema);
module.exports = User;
