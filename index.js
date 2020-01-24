var express = require('express');

const app = express();

app.get('/api/v1/users', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'users retrieved successfully',
      users:[{id: 1, name: "Tom"},{id: 2, name: "Alter"}]
    })
});

app.get('/api/v1/tasks', (req, res) => {
    res.status(200).send({
      success: 'true',
      message: 'tasks retrieved successfully',
      users:[{id: 1, name: "Call Tom"},{id: 2, name: "Prepare Lunch"}]
    })
});

app.get('/', (req, res) => {
    res.status(200).send("<!DOCTYPE html><body><p>Express API's Sample</p><p><a href='/api/v1/users'>Users</a></p><p><a href='/api/v1/tasks'>Tasks</a></p></body></html>");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});