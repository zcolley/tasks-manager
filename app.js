const express = require('express')
const tasks = require('./routes/tasks')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})
app.use('/api/v1/tasks', tasks)
const PORT = 3000

app.listen(PORT, () => console.log('Server is listening on port ' + PORT))
