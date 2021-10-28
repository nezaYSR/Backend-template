const mongoose = require("mongoose");

const inboxSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    message: {
        type: String,
        maxLength: 100
    },
    sendDate: { type: Date, default: Date.now() }
});

const Inbox = mongoose.model("inbox", inboxSchema);
module.exports = Inbox;