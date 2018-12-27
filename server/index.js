const express = require('express');
var app = express();
const path = require('path');
const port = 3004; //Specific for tourphotos
const db = require('../db/index.js');
const helperFunc = require('../helperFunctions/sortByCategory.js');

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/:listingId', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/dist/index.html'))
});

app.get('/:listingId/listingphotos', (req, res) => {
  db.retrievePhotos(req.params.listingId, function(err, results) {
    if (err) {
      console.log('Error retrieving data from database');
      return;
    } else {
      var sortedData = helperFunc.sortByCategory(results);
      res.send(sortedData);
    }
  }); 
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
