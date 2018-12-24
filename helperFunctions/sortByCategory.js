// Given an array of photos, need to sort into an object with the category as the key

// input is an array
// output is an object

// itterate over array 

var sortByCategory = function(data) {
  var sortedData = {};
  data.forEach(function(photo) {
    if (!(Object.keys(sortedData).includes(photo.category))) {
      sortedData[photo.category] = [];
      sortedData[photo.category].push(photo);
    } else {
      sortedData[photo.category].push(photo);
    }
  });
  return sortedData;
}

module.exports = {
  sortByCategory,
}