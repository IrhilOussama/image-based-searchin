const express = require("express");
const path = require("path");
const app = express();

app.use("/images", express.static(path.join(__dirname, "public/images")));

app.get("/", (req, res) => {
    res.send("hello");
})

app.listen(8000, _ => console.log("server is listening at port 8000"));

