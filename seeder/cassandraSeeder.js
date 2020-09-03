const fs = require('fs');
const faker = require('faker');
const v8 = require('v8');

//helpers___________________________________________________________
let randomNumber = (min, max) => {
  return (
    faker.random.number({
      'min': min,
      'max': max
    })
  )
};

const locations = ['San Francisco California United States', 'Los Angles California United States', 'Gardena California United States', 'Wimberley Texas United States', 'Austin Texas United States', 'Jersey City New Jersey United States', 'Seattle Washington United States', 'Vashon Washington United States', 'Avondale Arizona United States', 'Upper Hominy North Carolina United States', 'Hollywood California United States', 'Salinas California United States', 'Seaside California United States', 'Houston Texas United States', 'Nipomo California United States', 'Woodside California United States', 'Santa Cruz California United States', 'Watsonville California United States', 'South Lake Tahoe California United States'];

const nameNouns = ['Luxurious', 'Enchanting', 'New!', 'Luxury', 'Awesome', 'Cozy', 'Warm', 'Spacious', 'Upscale', 'Gorgeous', 'Unforgettable', 'Beautiful', 'Traditional', 'Magical', 'Private', 'Exclusive', 'Modern'];

const houseType = ['Barn', 'Condo', 'House', 'Bungalow', 'Loft', 'Beach House', 'Guesthouse', 'Guest Suite', 'Cottage', 'Resort', 'Mountain View Home', 'Castle', 'Cabin', 'Treehouse', 'Apartment', 'Mansion'];

const amenities = ['With Patio', 'With Ocean View', 'With Hot Tub', 'w/ Boathouse', 'With Magistic Mountain View', 'With City View', 'in a Quiet Neighborhood', '10 mins away from major attractions', 'w/ Panoramic View', 'With Pool', 'With Wifi/Netflix'];

const rates = ['$135', '$235', '$240', '$449', '$371', '$409', '$180', '$130', '$331', '$290', '$274', '$342', '$280'];

const rating = [3.66, 4.59, 4.18, 3.42, 4.99, 4.93, 3.77, 3.88, 4.81, 4.93, 4.36, 4.78, 4.81, 4.86, 4.95, 4.92];

const boolHost = [true, true, true, true, false, true, true, true, true, false, true, true];

const image = ['https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p1.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p2.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p3.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p4.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p5.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p6.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p7.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p8.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p9.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p10.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p11.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p12.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p13.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p14.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p15.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p16.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p17.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p18.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p19.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p20.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p21.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p22.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p23.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p24.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p25.jpg']

const list = ['Paris', 'Japan', 'List 1', 'favorite', 'trip 1', 'trip 2', 'list 2', 'Next Trip', 'Upcoming', 'Asia', 'Europe', 'Road Trip', 'Road Trip 2'];

const randomNumberSet = [randomNumber(1, 10), randomNumber(10, 100), randomNumber(100, 1000),randomNumber(1000, 10000), randomNumber(10000, 100000), randomNumber(100000, 1000000), randomNumber(5000000, 10000000), randomNumber(1000000, 10000000)];
//__________________________________________________________________


const checkMemoryNative = () => {
  console.log("Memory Usage: ", process.memoryUsage())
}

const printHeapStats = () => {
  console.log('Heap Status', v8.getHeapSpaceStatistics())
}

const propertyZero = (id) => {
  let collection = [];
  let data = '';
  let location = `"${locations[randomNumber(0, locations.length-1)]}"`;

  let title = `${nameNouns[randomNumber(0, nameNouns.length - 1)]} ${houseType[randomNumber(0, houseType.length - 1)]} ${amenities[randomNumber(0, amenities.length - 1)]}`;

  let images = `${image[randomNumber(0, image.length-1)]}`;

  let description = `Entire ${houseType[randomNumber(0, houseType.length - 1)]} • ${randomNumber(1, 7)} beds`;

  let rate = `${rates[randomNumber(0, rates.length-1)]}`;

  let ratings = `${rating[randomNumber(0, rating.length-1)]}`;

  let reviews = `${randomNumber(35, 368)}`;

  let superhost = `${boolHost[randomNumber(0, boolHost.length-1)]}`;

  for (let i = 0; i < 12; i ++) {
    let similiarProperties = {};
    let stringProperty = '';
    let subId = randomNumberSet[randomNumber(0, randomNumberSet.length-1)];
    let subLocation = `"${locations[randomNumber(0, locations.length-1)]}"`;
    let subTitle = `${nameNouns[randomNumber(0, nameNouns.length - 1)]} ${houseType[randomNumber(0, houseType.length - 1)]} ${amenities[randomNumber(0, amenities.length - 1)]}`;
    let subImages = `${image[randomNumber(0, image.length-1)]}`;
    let subDescription = `Entire ${houseType[randomNumber(0, houseType.length - 1)]} • ${randomNumber(1, 7)} beds`;
    let subRate = `${rates[randomNumber(0, rates.length-1)]}`;
    let subRatings = `${rating[randomNumber(0, rating.length-1)]}`;
    let subReviews = `${randomNumber(35, 368)}`;
    let subSuperhost = `${boolHost[randomNumber(0, boolHost.length-1)]}`;

    stringProperty = `{id: ${subId}, location: ${subLocation}, description: ${subDescription}, images: ${subImages}, number_of_reviews: ${subReviews}, rate: ${subRate}, ratings: ${subRatings}, superhost: ${subSuperhost}, title: ${subTitle}}`
    collection.push(stringProperty);
  }
    data = `${id};${location};${description};${images};${reviews};${rate};${ratings};[${collection}];${superhost};${title}\n`;

  // console.log(data);
  return data;
}

const writeProperty = (writer, times, callback) => {
  let id = 0;
  const writeFile = () => {
    let ok = true;
    do {
      times--;
      id++;
      const data1 = propertyZero(id);
      if (times === 0) {
        writer.write(data1, 'ascii', callback);
      } else {
        ok = writer.write(data1, 'ascii')
        if (!ok) {
          checkMemoryNative();
        }
      }
    } while (times > 0 && ok);
    if (times > 0) {
      writer.once('drain', writeFile)
    }
  }
  writeFile();
}

const writeStream = fs.createWriteStream('./propertyCassandraWithAscii.csv')
const line1 = 'id;location;description;images;number_of_reviews;rate;ratings;similiar_properties;superhost;title\n';
writeStream.write(line1);
writeProperty(writeStream, 10000000, () => {
  console.log('written!')
})

// console.log(randomNumberSet[randomNumber(0, randomNumberSet.length-1)])

// console.log(propertyZero())