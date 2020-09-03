const db = require('./index.js');


module.exports = {
  getProperties: (callback) => {
    db.query('select * from properties order by id desc limit 20' , (error, data) => {
      if (error) {
        console.log('cannot search database');
        callback(error);
      } else {
        console.log('database searched');
        callback(null, data.rows);
      }
    });
  },

  getSimiliarProperties: (id, callback) => {
    db.query(`select * from similiar_properties where property_id = ${id};` , (error, data) => {
      if (error) {
        console.log('cannot search database',id, error);
        callback(error);
      } else {
        console.log('database searched');
        callback(null, data.rows);
      }
    });
  },

  getOneProperty: (id, callback) => {
    db.query(`select * from properties where id = ${id}`, (error, data) => {
      if (error) {
        console.log('cannot search database');
        callback(error);
      } else {
        console.log('database searched');
        callback(null, data.rows);
      }
    });
  },
};