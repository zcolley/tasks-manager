const tasks = require('../models/tasks')
const get_all_tasks = async (req, res) => {
  // res.send('get all tasks')
  try {
    const all_tasks = await tasks.find()
    res.status(201).json({ all_tasks })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const create_tasks = async (req, res) => {
  try {
    const task = await tasks.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const get_task = async (req, res) => {
  // res.send('get task')
  try {
    const task = await tasks.findOne(req.params.id)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const update_task = async (req, res) => {
  // res.send('update task')

  try {
    const { id: taskID } = req.params
    const task = await tasks.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
const delete_task = async (req, res) => {
  // res.send(`delete task`)
  try {
    const { id } = req.params
    const task = await tasks.findOneAndDelete({ _id: id })
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}
module.exports = {
  get_all_tasks,
  create_tasks,
  get_task,
  update_task,
  delete_task,
}
