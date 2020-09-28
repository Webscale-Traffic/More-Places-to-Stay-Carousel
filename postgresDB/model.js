const db = require('./index.js');


module.exports = {
  getProperties: (callback) => {
    db.query('select * from properties order by id asc limit 20' , (error, data) => {
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
    db.query(`select * from properties where id in (select related_id from similiar_properties where property_id = ${id})` , (error, data) => {
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

  saveList: (data, id, callback) => {
    db.query(`insert into saved_list (list_name, pop_id) values ('${data.list_name}', ${id})`, (error, data) => {
      if (error) {
        console.log('cannot add into list', data);
        callback(error);
      } else {
        console.log('added into database');
        callback(null, data);
      }
    })
  }
};