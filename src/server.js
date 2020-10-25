const express = require("express");
const config = require("./config/config");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const { PORT } = config;
const app = express();
app.use(morgan(":method :url :status - :response-time ms"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
     return res.send("Hello world!");
});
//* import components
app.use("/", require("./todos/todo.controller"));

//* =============================================
app.all("*", (req, res) => {
     return res.json({
          status: 404,
          message: `Can't find ${req.originalUrl}`,
     });
});
//* Error handling
app.use((err, req, res, next) => {
     return res.status(500).json({
          status: 500,
          message: err.message,
     });
});
process.on("unhandledRejection", (reason, promise) => {
     console.log(
          "UNHANDLE REJECTION at ",
          promise,
          `reason: ${reason.message}`
     );
});
process.on("uncaughtException", (err) => {
     console.log(err.name, err.message);
     console.log("UNCAUGHT EXCEPTION! Shutting down...");
});
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
