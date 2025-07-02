const express = require("express");
const router = express.Router();
const {addTask,getAllTasks,getTask} = require("../routes");

router.post('/addTask',addTask);
router.get('/getTasks',getAllTasks);
router.get('/getTask',getTask);

module.exports = router;