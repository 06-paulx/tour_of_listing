DROP DATABASE IF EXISTS tour_of_listing;

CREATE DATABASE tour_of_listing;

USE tour_of_listing;

CREATE TABLE listingphotos (
  id INT NOT NULL AUTO_INCREMENT,
  listingId INT NOT NULL,
  photourl varchar(100) NOT NULL,
  category varchar(50) NOT NULL,
  categorytext varchar(250),
  PRIMARY KEY (id)
);



/*
  mysql -u root -p <schema.sql
*/
