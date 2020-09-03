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

      while (checkArray.length < 12 && currentID!== id ) {
        let randomProperty = randomNumber(1, 10000000);
        currentID = randomProperty;
        dataSim += `${id},`;
        dataSim += ` ${randomProperty}`;
        dataSim += `\n`;
        noDuplicate[randomProperty] = 1;
        checkArray.push(randomProperty)
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

const writeStream = fs.createWriteStream('./sim.csv')
const line1 = 'property_id, related_id \n';
writeStream.write(line1);
writeSim(writeStream, 10000000, () => {
  console.log('written!')
})
