const express = require('express')

const router = express.Router()

const TaskController = require('../controllers/TaskController')



router.get('/add', TaskController.createTask)
router.post('/add',TaskController.createTaskSave)
router.get('/', TaskController.showTasks)
router.post('/remove',TaskController.removeTasks)
router.post('/update',TaskController.TaskUpdatePost)
router.get('/update/:id', TaskController.uptadetasks)
router.post('/updatestatus',TaskController.UpdateStatus)


module.exports = router

