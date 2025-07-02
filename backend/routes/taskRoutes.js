const express = require("express");
const router = express.Router();
const {addTask,getAllTasks,getTask} = require("../controllers/taskController");
const {protect, authorize } = require("../middlewares/auth");

router.post('/addTask',protect,addTask);
router.get('/getTasks',protect,authorize["admin"],getAllTasks);
router.get('/getTask',protect,getTask);

module.exports = router;