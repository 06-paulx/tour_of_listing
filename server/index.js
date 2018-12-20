const express = require('express');
var app = express();
const path = require('path');
const port = 3004; //Specific for tourphotos

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
