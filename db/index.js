var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'tour_of_listing',
});

connection.connect()

var retrievePhotos = (callback) => {
  connection.query('SELECT * FROM listingphotos', function(err, results) {
    if (err) {
      console.log('Error retrieving photos from database');
      return;
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  retrievePhotos,
}