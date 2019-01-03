const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

app.use('/', express.static('./'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/signup', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  res.json(`Thanks <i>${name}</i>,<br> <br> We will send updates to <i>${email}</i>!`)
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});