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

const checkMemoryNative = () => {
  console.log("Memory Usage: ", process.memoryUsage())
}

const printHeapStats = () => {
  console.log('Heap Status', v8.getHeapSpaceStatistics())
}

const similiarProperties = (id, entries) => {

  let noDuplicate = {};
  let checkArray =[];
  let dataSim = '';
  let currentID = 0;

  for (let i = 1; i < 16; i++) {
    // while (i < 12){
    const randomNumberSet = [randomNumber(1, 10), randomNumber(10, 100), randomNumber(100, 1000),randomNumber(1000, 10000), randomNumber(10000, 100000), randomNumber(100000, 1000000), randomNumber(5000000, 10000000), randomNumber(1000000, 10000000)];
    let randomProperty = randomNumberSet[randomNumber(0,randomNumberSet.length-1)];
      if ( currentID !== id && noDuplicate[randomProperty] === undefined) {
        currentID = randomProperty;
        dataSim += `${id},`;
        dataSim += ` ${randomProperty}`;
        dataSim += `\n`;
        noDuplicate[randomNumberSet] = 1;
        checkArray.push(randomProperty)
      }
    // }
  }
  return dataSim;
}

const writeSim = (writer, times, callback) => {
  let id = 0;
  const writeFile = () => {
    let ok = true;
    do {
      times--;
      id++;
      const data1 = similiarProperties(id, times);
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

const writeStream = fs.createWriteStream('./sim5.csv')
const line1 = 'property_id, related_id \n';
writeStream.write(line1);
writeSim(writeStream, 1, () => {
  console.log('written!')
})
