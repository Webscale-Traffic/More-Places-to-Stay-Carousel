const Listing = require('./index.js');
const faker = require('faker');
const helpers = require('./helpers/helpers');

module.exports = {
  getListings: (callback) => {
    Listing.find((error, listings) => {
      if (error) {
        console.log('cannot search database');
        callback(error);
      } else {
        console.log('database searched');
        callback(null, listings);
      }
    });
  },

  postListing: () => {
    const newListingObj = {
      image: `https://fec-image-carousel-photos.s3.us-east-2.amazonaws.com/image-${helpers.selectImage()}.jpg`,
      description: helpers.setRandomDescription(),
      title: helpers.setRandomTitle(),
      rate: helpers.setRandomRate(),
      avgRating: helpers.setRandomAvgRating(),
      numberOfRatings: helpers.setRandomNumOfRatings(),
      wasLiked: faker.fake('{{random.boolean}}'),
      superhost: faker.fake('{{random.boolean}}'),
    };
    const newListing = new Listing(newListingObj);
    newListing.save()
      .then((doc) => {
        console.log('Saved!', doc);
      })
      .catch((err) => {
        console.error(err);
      });
  }
};
