const express = require('express');
const app = express();
const mocks = require('./mocks.json');

app.get('/api/forms/:id', function (req, res) {
    res.send(mocks[0]);
});

app.listen(3000, function () {
    console.log('Server running on port 3000');
});