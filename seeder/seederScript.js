const fs = require('fs');
const faker = require('faker');

let randomNumber = (min, max) => {
  return(
  faker.random.number({
    'min':min,
    'max': max
  })
  )
};

const locations = ['San Francisco, California, United States', 'Los Angles, California, United States', 'Gardena, California, United States', 'Wimberley, Texas, United States', 'Austin, Texas, United States', 'Jersey City, New Jersey, United States', 'Seattle, Washington, United States', 'Vashon, Washington, United States', 'Avondale, Arizona, United States', 'Upper Hominy, North Carolina, United States', 'Hollywood, California, United States', 'Salinas, California, United States', 'Seaside, California, United States', 'Houston, Texas, United States', 'Nipomo, California, United States', 'Woodside, California, United States', 'Santa Cruz, California, United States', 'Watsonville, California, United States', 'South Lake Tahoe, California, United States'];

const nameNouns = ['Luxurious', 'Enchanting', 'New!', 'Luxury', 'Awesome', 'Cozy', 'Warm', 'Spacious', 'Upscale', 'Gorgeous', 'Unforgettable', 'Beautiful', 'Traditional', 'Magical', 'Private', 'Exclusive', 'Modern'];

const houseType = ['Barn', 'Condo', 'House', 'Bungalow', 'Loft', 'Beach House', 'Guesthouse', 'Guest Suite', 'Cottage', 'Resort', 'Mountain View Home', 'Castle', 'Cabin', 'Treehouse', 'Apartment', 'Mansion'];

const amenities = ['With Patio', 'With Ocean View', 'With Hot Tub', 'w/ Boathouse', 'With Magistic Mountain View', 'With City View', 'in a Quiet Neighborhood', '10 mins away from major attractions', 'w/ Panoramic View', 'With Pool', 'With Wifi/Netflix'];

const rates = ['$135', '$235', '$240', '$449', '$371', '$409', '$180', '$130', '$331', '$290', '$274', '$342', '$280'];


// console.log(randomNumber(0,12))
//faker.random.boolean
let ratings = randomNumber(0,5);

const seedProperty = (entries) => {
  let data = 'id, title, image, description, avg_rating, rates, number_of_reviews, location, superhost \n';
  for (let i = 1; i < entries; i++) {
    let random = randomNumber()
    let title = `${nameNouns[randomNumber(0,nameNouns.length)]} ${houseType[randomNumber(0,houseType.length)]} ${amenities[randomNumber(0,amenities.length)]}`;
    let image = `image`;
    let description = `Entire ${houseType[randomNumber(0,houseType.length)]} • ${randomNumber(1,7)}`;
    let location = `${locations[randomNumber(0,locations.length)]}`
    data += `${i},`;
    data += ` ${title},`;
    data += ` ${image},`;
    data += ` ${description},`;
    data += ` ${randomNumber(3,5).toPrecision(2)},`;
    data += ` ${rates[randomNumber(0,rates.length)]},`;
    data += ` ${randomNumber(35, 368)},`;
    data += ` "${location}",`;
    data += ` ${faker.random.boolean()}`;
    data += `\n`
  }
  return new Promise((resolve, reject) => {
    fs.writeFile('property.txt', data, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

seedProperty(10)
  .then(() => {console.log('success')})
  .catch(() => {console.log('nope')})