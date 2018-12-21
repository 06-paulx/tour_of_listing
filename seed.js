var mysql = require('mysql');
var data = require('./mockData.js');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysql',
  database: 'tour_of_listing',
});

connection.connect()

var seedData = () => {
  for (var i = 0; i < data.length; i++) {
    connection.query(`INSERT INTO listingphotos (id, listingId, photourl, category, categorytext) 
                  VALUES (${data[i].id}, ${data[i].listingid}, '${data[i].photourl}', '${data[i].category}', '${data[i].categoryText}')`,
                  (err, result) => {
                    if (err) {
                      console.log('ERR Seeding Data', err);
                    } else {
                      console.log('seeding complete');
                    }
                  });
  }
}

seedData();