const connect_db = require('./db/connect')
const express = require('express')
const tasks = require('./routes/tasks')
const app = express()
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})
app.use('/api/v1/tasks', tasks)
const PORT = 3000

const start = async () => {
  try {
    await connect_db(process.env.MONGO_URL)
    app.listen(PORT, () => console.log('Server is listening on port ' + PORT))
  } catch (error) {
    console.error(error)
  }
}

start()
