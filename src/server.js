const express = require("express");
const config = require("./config/config");
const bodyParser = require("body-parser");

const { PORT } = config;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", require("./todos/todo.controller"));

app.get("/", (req, res) => {
     return res.send("Hello world!");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
