require("dotenv").config();
const express = require("express");
var cors = require("cors");

const PORT = process.env.PORT;
const mongooseConnect = require("./configs/connection");
const routes = require("./routes");
const app = express();

const port = process.env.PORT || 3000;

mongooseConnect();

app.use(cors());

app.get("/", (req, res) => {
    res.send("hello all");
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

// app.listen(5000, () => {
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
