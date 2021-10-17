const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
    _userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    userName: { type: String, required: true },
    userGender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    phoneNumber: { type: String },
    userImg: { type: String },
    lastActivity: { type: Date }
});

const UserProfile = mongoose.model("UserProfile", userProfileSchema);
module.exports = UserProfile;
