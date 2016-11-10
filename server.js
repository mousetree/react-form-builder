const fs = require('fs');
const express = require('express');
const app = express();

app.get('/api/forms/:id', function (req, res) {
    fs.readFile('./mocks.json', (err, data) => {
        const mocks = JSON.parse(data);
        res.send(mocks[0]);
    })
});

app.listen(3000, function () {
    console.log('Server running on port 3000');
});