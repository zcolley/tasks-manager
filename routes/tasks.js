const express = require('express')
const router = express.Router()
const {
  get_all_tasks,
  get_task,
  update_task,
  delete_task,
  create_tasks,
} = require('../controllers/tasks')
router.route('/').get(get_all_tasks).post(create_tasks)
router.route('/:id').get(get_task).patch(update_task).delete(delete_task)

module.exports = router
