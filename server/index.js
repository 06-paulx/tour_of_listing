const express = require('express');
var app = express();
const path = require('path');
const port = 3004; //Specific for tourphotos
const db = require('../db/index.js');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/listingphotos', (req, res) => {
  console.log('GET');
  db.retrievePhotos(function(err, results) {
    if (err) {
      console.log('Error retrieving data from database');
      return;
    } else {
      res.send(results);
    }
  }); 
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
