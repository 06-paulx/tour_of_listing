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
  for (var i = 0; i < data.totalData.length; i++) {
    var photolist = data.totalData[i];
    connection.query(`INSERT INTO listingphotos (id, listingId, photourl, category, categorytext) 
                  VALUES (${photolist.id}, ${photolist.listingid}, '${photolist.photourl}', '${photolist.category}', '${photolist.categoryText}')`,
                  (err, result) => {
                    if (err) {
                      console.log('ERR Seeding Data', err);
                    } else {
                      console.log('seeding complete');
                    }
                  });
  }

  for (var i = 0; i < data.houseTypeData.length; i++) {
    var housetype = data.houseTypeData[i];
    connection.query(`INSERT INTO listinghousetype (id, listinghousetype)
    VALUES (${housetype.id}, '${housetype.houseType}')`, (err, reulst) => {
      if (err) {
        console.log('ERR Seeding HouseType Data', err);
      } else {
        console.log('Seeding of HouseData Complete');
      }
    });
  }
}

seedData();