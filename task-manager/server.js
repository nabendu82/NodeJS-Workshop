const express = require('express');
require('./db/mongoose');
const Task = require('./models/task');

const app = express()
const port = process.env.PORT || 8000;
app.use(express.json());

app.post('/tasks', (req, res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.status(201).send(task)
    }).catch(e => {
        res.status(400).send(e)
    })
})

app.get('/tasks', (req, res) => {
    Task.find({}).then(tasks => res.send(tasks))
                .catch(e => res.status(500).send())
})

app.listen(port, () => console.log(`Server is up on port ${port}`))