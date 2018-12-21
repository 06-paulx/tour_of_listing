var necessaryCategories = ['Living Room', 'Kitchen', 'Bedroom', 'Bathroom', 'Dining Room', 'Entrance to Home'];
var extraCategories = ['Recreation', 'Exterior', 'Entry']

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var photourls = {
	'Living Room': ["https://s3-us-west-1.amazonaws.com/touroflistingphotostream/livingroom1.jpg",
									"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/livingroom2.jpg",
									"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/livingroom3.jpg",
									"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/livingroom4.jpg",
									"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/livingroom5.jpg",
									"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/livingroom6.jpg"],

	'Kitchen': ["https://s3-us-west-1.amazonaws.com/touroflistingphotostream/kitchen1.jpeg",
							"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/kitchen2.jpg",
							"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/kitchen3.jpg",
							"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/kitchen4.JPG",
							"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/kitchen5.jpg",
							"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/kitchen6.jpg"],

	'Bedroom': ["https://s3-us-west-1.amazonaws.com/touroflistingphotostream/bathroom1.jpg",
							"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/bathroom2.jpg",
							"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/bathroom3.jpeg",
							"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/bathroom4.jpg",
							"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/bathroom5.jpeg",
							"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/bathroom6.jpeg"],

	'Bathroom': ["https://s3-us-west-1.amazonaws.com/touroflistingphotostream/bedroom1.jpg",
							"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/bedroom2.jpg",
							"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/bedroom3.jpeg",
							"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/bedroom4.jpg",
							"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/bedroom5.jpg",
							"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/bedroom6.jpg"],

	'Dining Room': ["https://s3-us-west-1.amazonaws.com/touroflistingphotostream/diningroom1.jpg",
									"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/diningroom2.jpg",
									"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/diningroom3.jpg",
									"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/diningroom4.jpg",
									"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/diningroom5.jpg",
									"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/diningroom6.jpeg"],

	'Entrance to Home': ["https://s3-us-west-1.amazonaws.com/touroflistingphotostream/entrance1.jpg",
										"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/entrance2.jpg",
										"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/entrance3.jpg",
										"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/entrance4.jpg",
										"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/entrance5.jpg",
										"https://s3-us-west-1.amazonaws.com/touroflistingphotostream/entrance6.jpeg"],

};

var categoryText = ['Lorem ipsum dolor sit amet, consectetur', '','porro quisquam est qui dolorem ipsum quia','','', '', '', '','','', '', ''];

var createMock = function (listingid) {
	var mockData = [];
	for (var i = 0; i < necessaryCategories.length; i++) {
		for (var j = 0; j < 3; j++) {
			var mock = {
			listingid: listingid,
			photourl: 'allsameURL',
			category: necessaryCategories[i],
			categoryText: 'something else'
		  }
		  mockData.push(mock);
		}
	}
	return mockData;
};

var eachListingid = function() {
	var mockData = [];
	for (var i = 1; i <= 100; i++) { // 10 is number of entries, eventually should be 100
		mockData = mockData.concat(createMock(i));
	}
	return mockData;
};

var beforePhoto = eachListingid();


var addPhotoURL = function(mockData) {
	for(var i = 0; i < mockData.length; i++) {
		var listing = mockData[i];
		listing.photourl = photourls[listing.category][getRandomInt(6)];
		listing.id = i;
		listing.categoryText = categoryText[getRandomInt(13)];
	}
	return mockData;
};

var totalData = addPhotoURL(beforePhoto);

module.exports = totalData;
