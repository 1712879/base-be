const express = require("express");
const router = express.Router();
const todoSchema = require("./schemas/todo.schema");
const db = require("../config/db");

//* GET findById
router.get("/todo", async (req, res) => {
     db.DBconnect();
     const results = await todoSchema.find({});
     db.DBdisconnect();
     return res.json(results);
});

//* GET todo/:id
router.get("/todo/:id", async (req, res) => {
     const { id } = req.params;
     db.DBconnect();
     const results = await todoSchema.findById(id);
     db.DBdisconnect();
     return res.json(results);
});

//* POST todo/
router.post("/todo", async (req, res) => {
     const { name, age } = req.body;
     try {
          db.DBconnect();
          const todo = new todoSchema({ name, age });
          await todo.save();
     } catch (error) {
          return res.json({ status: 500, data: { message: "CREATED FAILED" } });
     } finally {
          db.DBdisconnect();
     }
     return res.json({
          status: 201,
          data: { message: "CREATED SUCCESSFULLY" },
     });
});

//* PUT todo/:id
router.put("/todo/:id", async (req, res) => {
     const { id } = req.params;
     const update = req.body;
     db.DBconnect();
     const checkExist = await todoSchema.exists({ _id: id });
     if (!checkExist) {
          return res.json({ status: 404, data: { message: "ID NOT FOUND" } });
     }
     try {
          await todoSchema.findByIdAndUpdate(id, update);
     } catch (error) {
          return res.json({ status: 500, data: { message: "UPDATED FAILED" } });
     } finally {
          db.DBdisconnect();
     }
     return res.json({
          status: 200,
          data: { message: "UPDATED SUCCESSFULLY" },
     });
});

//* DELETE todo:/:id
router.delete("/todo/:id", async (req, res) => {
     const { id } = req.params;
     db.DBconnect();
     const checkExist = await todoSchema.exists({ _id: id });
     if (!checkExist) {
          return res.json({ status: 404, data: { message: "ID NOT FOUND" } });
     }
     try {
          await todoSchema.deleteOne({ _id: id });
     } catch (error) {
          return res.json({ status: 500, data: { message: "DELETED FAILED" } });
     } finally {
          db.DBdisconnect();
     }
     return res.json({
          status: 200,
          data: { message: "DELETED SUCCESSFULLY" },
     });
});

module.exports = router;
