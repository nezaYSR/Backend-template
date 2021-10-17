const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
    mongoose.connect(process.env.CLOUD, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true,
    });
    const mongoDb = mongoose.connection;
    mongoDb.on("error", (e) => console.log(e));
    mongoDb.once("open", () => console.log("mongoDB connected"));
};
