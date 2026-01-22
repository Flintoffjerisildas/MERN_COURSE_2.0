const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/create-task", authMiddleware, taskController.createTask);
router.get("/get-tasks", authMiddleware, taskController.getTasks);
router.put("/update-task", authMiddleware, taskController.updateTask);
router.delete("/delete-task", authMiddleware, taskController.deleteTask);
router.get("/get-task/:id", authMiddleware, taskController.getTaskById);
router.post("/get-task", authMiddleware, taskController.getTaskByTitle);

module.exports = router;