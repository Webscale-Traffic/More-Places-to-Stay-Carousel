const Pool = require('pg').Pool

const pool = new Pool ( {
  user:'postgres',
  host: '54.219.141.245',
  database: 'more_places_to_stay',
  port: 5432
})

pool.connect((err) => {
  if (err) {
    console.log('error',err);
  } else {
    console.log('connected to Postgres');
  }
})

module.exports = pool;