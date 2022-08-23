const get_all_tasks = (req, res) => {
  res.send('get all tasks')
}
const create_tasks = (req, res) => {
  res.json(req.body)
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
