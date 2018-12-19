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
  if (!req.params.word) {
    res.send({
      "error": "Please provide an input!"
    })
  } else if (req.params.word) {
    res.send({
      "appended": req.params.word + "a",
    })
  }
});


const bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(bp());

function sum(num) {
  let sumNum = 0;
  for (let i = num; i >= 0; i--) {
    sumNum += i;
  } return sumNum;
}
function factor(num) {
  let factNum = 1;
  for (let i = 1; i <= num; i++) {
    factNum *= i;
  } return factNum;
}
app.post('/dountil/:action', (req, res) => {
  const {action} = req.params;
  if (action === 'sum') {
    res.json({
      "result": sum(req.body.until)
    })
  } else if (action === 'factor') {
    res.json({ 
      "result": factor(req.body.until)
     })
  } else {
    res.json({ "error": "Please provide a number!" })
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});

