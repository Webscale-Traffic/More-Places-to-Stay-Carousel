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
const list = ['Paris', 'Japan', 'List 1', 'favorite', 'trip 1', 'trip 2', 'list 2', 'Next Trip', 'Upcoming', 'Asia', 'Europe', 'Road Trip', 'Road Trip 2'];

const seedList = (entries) => {
  let dataList = 'list_name;id;pop_id\n';
  let noDuplicate = {};
  for (let k = 0; k < list.length; k++) {
    let randomNumberOfProperty = randomNumber(1, 20);
    for (let m = 1; m < randomNumberOfProperty; m++) {
      const randomNumberSet = [randomNumber(1, 10), randomNumber(10, 100), randomNumber(100, 1000),randomNumber(1000, 10000), randomNumber(10000, 100000), randomNumber(100000, 1000000), randomNumber(5000000, 10000000), randomNumber(1000000, 10000000)];
      let ranNum = randomNumberSet[randomNumber(0, randomNumberSet.length-1)];
      while (noDuplicate[ranNum] === undefined) {
        dataList += `${list[k]};`;
        dataList += `${k + 1};`;
        dataList += `${ranNum}`;
        dataList += `\n`;
        noDuplicate[ranNum] = 1;
      }
    }
  }
    return new Promise ((resolve, reject) => {
    fs.writeFile('cassandra_list.csv', dataList, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}
seedList()
  .then(() => {console.log('success')})
  .catch(() => {console.log('nope')})