const fs = require('fs');
const faker = require('faker');
const v8 = require('v8');


let randomNumber = (min, max) => {
  return (
    faker.random.number({
      'min': min,
      'max': max
    })
  )
};

const locations = ['San Francisco, California, United States', 'Los Angles, California, United States', 'Gardena, California, United States', 'Wimberley, Texas, United States', 'Austin, Texas, United States', 'Jersey City, New Jersey, United States', 'Seattle, Washington, United States', 'Vashon, Washington, United States', 'Avondale, Arizona, United States', 'Upper Hominy, North Carolina, United States', 'Hollywood, California, United States', 'Salinas, California, United States', 'Seaside, California, United States', 'Houston, Texas, United States', 'Nipomo, California, United States', 'Woodside, California, United States', 'Santa Cruz, California, United States', 'Watsonville, California, United States', 'South Lake Tahoe, California, United States'];

const nameNouns = ['Luxurious', 'Enchanting', 'New!', 'Luxury', 'Awesome', 'Cozy', 'Warm', 'Spacious', 'Upscale', 'Gorgeous', 'Unforgettable', 'Beautiful', 'Traditional', 'Magical', 'Private', 'Exclusive', 'Modern'];

const houseType = ['Barn', 'Condo', 'House', 'Bungalow', 'Loft', 'Beach House', 'Guesthouse', 'Guest Suite', 'Cottage', 'Resort', 'Mountain View Home', 'Castle', 'Cabin', 'Treehouse', 'Apartment', 'Mansion'];

const amenities = ['With Patio', 'With Ocean View', 'With Hot Tub', 'w/ Boathouse', 'With Magistic Mountain View', 'With City View', 'in a Quiet Neighborhood', '10 mins away from major attractions', 'w/ Panoramic View', 'With Pool', 'With Wifi/Netflix'];

const rates = ['$135', '$235', '$240', '$449', '$371', '$409', '$180', '$130', '$331', '$290', '$274', '$342', '$280'];

const rating = [3.66, 4.59, 4.18, 3.42, 4.99, 4.93, 3.77, 3.88, 4.81, 4.93, 4.36, 4.78, 4.81, 4.86, 4.95, 4.92];

const boolean = [true, true, true, true, false, true, true, true, true, false, true, true];

const image = ['https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p1.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p2.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p3.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p4.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p5.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p6.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p7.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p8.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p9.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p10.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p11.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p12.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p13.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p14.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p15.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p16.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p17.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p18.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p19.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p20.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p21.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p22.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p23.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p24.jpg', 'https://homepictures.s3-us-west-1.amazonaws.com/sdc_photos/p25.jpg']

const list = ['Paris', 'Japan', 'List 1', 'favorite', 'trip 1', 'trip 2', 'list 2', 'Next Trip', 'Upcoming', 'Asia', 'Europe', 'Road Trip', 'Road Trip 2'];

//drain------------------------------------------
const writeProperties = (id) => {

  let title = `${nameNouns[randomNumber(0, nameNouns.length - 1)]} ${houseType[randomNumber(0, houseType.length - 1)]} ${amenities[randomNumber(0, amenities.length - 1)]}`;

  let description = `Entire ${houseType[randomNumber(0, houseType.length - 1)]} • ${randomNumber(1, 7)} beds`;

  let dataProps = `${id}, ${title}, ${image[randomNumber(0, image.length - 1)]}, ${description}, ${rating[randomNumber(0, rating.length - 1)]}, ${rates[randomNumber(0, rates.length - 1)]}, ${randomNumber(35, 368)}, ${randomNumber(1, locations.length - 1)}, ${boolean[randomNumber(0, boolean.length - 1)]}\n`

  return dataProps;
}

const writeLocations = (id) => {
  let dataLoc = `${id}, "${locations[id - 1]}"\n`;
  return dataLoc;
}

const similiarProperties = (entries) => {

  let noDuplicate = {};
  const dataSim = '';
  for (let k = 1; k <= entries; k++) {
    // let randomNumberOfProperty = randomNumber(3, 20)
    for (let m = 1; m <= 12; m++) {
      let randomProperty = randomNumber(1, entries);
      while (noDuplicate[randomProperty] === undefined) {
        dataSim += `${k},`;
        dataSim += ` ${randomProperty},`;
        dataSim += `\n`;
        noDuplicate[randomProperty] = 1;
      }
    }
  }
  return dataSim;
}

const checkMemoryNative = () => {
  console.log("Memory Usage: ", process.memoryUsage())
}

const printHeapStats = () => {
  console.log('Heap Status', v8.getHeapSpaceStatistics())
}

const writeProps = (writer, times, callback) => {
  let id = 0;
  const writeFile = () => {
    let ok = true;
    do {
      times--;
      id++;
      const data1 = writeProperties(id);
      if (times === 0) {
        writer.write(data1, 'utf-8', callback);
      } else {
        ok = writer.write(data1, 'utf-8')
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

const writeLocs = (writer, times, callback) => {
  let id = 0;
  let i = times;
  const writeFile = () => {
    let ok = true;
    do {
      times--;
      id++;
      const data = writeLocations(id);
      if (times === 0) {
        writer.write(data, 'utf-8', callback);
      } else {
        ok = writer.write(data, 'utf-8')
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

//Properties_______________________________________________
// const writeStream = fs.createWriteStream('./property.csv')
// const line1 = 'id, title, image, description, avg_rating, rates, number_of_reviews, location, superhost \n';
// writeStream.write(line1);
// writeProps(writeStream, 10000000, () => {
//   console.log('written!')
// })

// //locations________________________________________________
// const writeStreamLocs = fs.createWriteStream('./location.csv')
// const line1Loc = 'id, location\n'
// writeStreamLocs.write(line1Loc);
// writeLocs(writeStreamLocs, locations.length, () => {
//   console.log('got locations')
// })

//list______________________________________________________
const seedList = (entries) => {
  let dataList = 'list_name, pop_id\n';
  let noDuplicate = {};
  for (let k = 0; k < list.length; k++) {
    let randomNumberOfProperty = randomNumber(3, 20);
    for (let m = 1; m < randomNumberOfProperty; m++) {
      let randomProperty = randomNumber(1, entries);
      while (noDuplicate[randomProperty] === undefined) {
        // dataList += `${k + 1},`;
        dataList += ` ${list[k]},`;
        dataList += ` ${randomProperty}`;
        dataList += `\n`;
        noDuplicate[randomProperty] = 1;
      }
    }
  }
    return new Promise ((resolve, reject) => {
    fs.writeFile('list.csv', dataList, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}
seedList(10000000)
  .then(() => {console.log('success')})
  .catch(() => {console.log('nope')})