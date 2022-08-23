const tasks = require('../models/tasks')
const get_all_tasks = (req, res) => {
  res.send('get all tasks')
}
const create_tasks = async (req, res) => {
  try {
    const task = await tasks.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const get_task = (req, res) => {
  res.send('get task')
}
const update_task = (req, res) => {
  res.send('update task')
}
const delete_task = (req, res) => {
  res.send(`delete task`)
}
module.exports = {
  get_all_tasks,
  create_tasks,
  get_task,
  update_task,
  delete_task,
}
