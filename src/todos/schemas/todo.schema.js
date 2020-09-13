const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
     {
          name: String,
          age: Number,
     },
     { collection: "todos" }
);

module.exports = mongoose.model("todos", todoSchema);
