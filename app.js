const fs = require('fs');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.get('/get_file/:name', (req, res) => {
    if(!req.params.name) return res.json({error: 'No file name provided'});
    if(!fs.existsSync(`${__dirname}/stored_files/${req.params.name}`)) return res.json({error: 'File not found'});
    res.sendFile(`${__dirname}/stored_files/${req.params.name}`);
});

app.listen(port, () => 'Server started on port ' + port);