const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));

});

app.get('/doubling', (req, res) => {
  if (req.query.input) {
    res.send({
      "received": req.query.input,
      "result": req.query.input * 2
    })
  } else {
    res.send({
      "error": "Please provide an input!"
    })
  }
});

app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) {
    res.send({
      "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    });
  } else if (req.query.name) {
    res.send({
      "error": "Please provide a title!"
    });
  } else {
    res.send({
      "error": "Please provide a name!"
    });
  }
});
app.get('/appenda/:word', (req, res) => { 
  if(!req.params.word) {
    res.send({
      "error": "Please provide an input!"
    })
  // } else if(req.params.word){
  //   res.send({
  //   "appended": req.params.word+"a",
  //   })
  // }
 } });

 app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});

