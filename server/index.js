require('newrelic');
const express = require('express');
const path = require('path');
const compression = require('compression');
const expressStaticGzip = require('express-static-gzip');
const model = require('../postgresDB/model.js');
const bodyparser = require('body-parser');
const app = express();

app.use(compression());

app.use(bodyparser.json());

const PORT = 3004;
app.use('/properties/:id', express.static(path.join(__dirname, '../public')));

app.get('/properties', (req, res) => {
  model.getProperties((err, data) => {
    if (err) {
      console.log('error');
      res.status(404).send();
    } else {
      res.status(200).send(data);
    }
  })
});

app.get('/properties/:id', (req, res) => {
  model.getOneProperty(req.params.id, (err, data) => {
    if (err) {
      console.log('error');
      res.status(404).send();
    } else {
      res.status(200).send(data);
    }
  })
});


app.get('/properties/:id/similiar', (req, res) => {
  model.getSimiliarProperties(req.params.id, (err, data) => {
    if (err) {
      console.log('error');
      res.status(404).send();
    } else {
      res.status(200).send(data);
    }
  })
});

app.post('/properties/:id/savedList', (req, res) => {
  // console.log(req.params.id);

  model.saveList(req.body, req.params.id, (err, data) => {
    if (err) {
      console.log('error', data);
      res.status(404).send();
    } else {
      res.status(200).send(data);
    }
  })
})


app.listen(PORT, (error) => {
  if (error) {
    console.log('Failed Server Connection');
  } else {
    console.log(`Server listening on PORT: ${PORT}`);
  }
});
