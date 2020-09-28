const seedProperty = (entries) => {
  let data = 'id, title, image, description, avg_rating, rates, number_of_reviews, location, superhost \n';
  let datalocation = 'id location\n';
  let dataList = 'id list_name pop_id\n';
  for (let j = 1; j < locations.length; j++) {
    datalocation += `${j},`;
    datalocation += ` "${locations[j - 1]}"`;
    datalocation += `\n`;
  }
  let noDuplicate = {};
  for (let k = 0; k < list.length; k++) {
    let randomNumberOfProperty = randomNumber(3, 20)
    for (let m = 1; m < randomNumberOfProperty; m++) {
      let randomProperty = randomNumber(1, entries);
      while (noDuplicate[randomProperty] === undefined) {
        dataList += `${k + 1},`;
        dataList += ` ${list[k]},`;
        dataList += ` ${randomProperty},`;
        dataList += `\n`;
        noDuplicate[randomProperty] = 1;
      }
    }
  }

  for (let i = 1; i < entries; i++) {
    let title = `${nameNouns[randomNumber(0, nameNouns.length - 1)]} ${houseType[randomNumber(0, houseType.length - 1)]} ${amenities[randomNumber(0, 12)]}`;
    let description = `Entire ${houseType[randomNumber(0, houseType.length - 1)]} • ${randomNumber(1, 7)} beds`;
    data += `${i},`;
    data += ` ${title},`;
    data += ` ${image[i % (image.length)]},`;
    data += ` ${description},`;
    data += ` ${rating[i % 16]},`;
    data += ` ${rates[randomNumber(0, rates.length - 1)]},`;
    data += ` ${randomNumber(35, 368)},`;
    data += ` ${randomNumber(1, locations.length - 1)},`;
    data += ` ${boolean[randomNumber(0, boolean.length - 1)]}`;
    data += `\n`;
  }
  return new Promise((resolve, reject) => {
    fs.writeFile('property.csv', data, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
    fs.writeFile('location.csv', datalocation, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
    fs.writeFile('list.csv', dataList, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

seedProperty(10000000)
  .then(() => { console.log('success') })
  .catch(() => { console.log('nope') })
let location = `${locations[randomNumber(0, 19)]}`;
let ran = randomNumber(0, 18)
console.log(locationStorage)

for (let i = 1; i <= ; i++) {
  let noDuplicate = {};
  const container = '';
  for (let j = 1; j <= 12; j++) {
    let randomProperty = randomNumber(1, entries);
    while(noDuplicate[popId] === undefined) {

      container += `${i}, ${randomProperty}\n`
    }
  }
}