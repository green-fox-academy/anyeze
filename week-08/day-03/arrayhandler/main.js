const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

const sum = (numbers) => {
  let sum = 0;
  numbers.forEach(e => {
    sum += e;
  });
  return sum;
}
const multiply = (numbers) => {
  let multi = 1;
  numbers.forEach(e => {
    multi *= e;
  });
  return multi;
}
const double = (numbers) => {
  let result = [];
  numbers.forEach(e => {
    result.push(e * 2);
  });
  return result;
}

app.post('/arrays', (req, res) => {
  const { what, numbers } = req.body;
  if (what === 'sum') {
    res.json({
      "result": sum(numbers)
    });
  } else if (what === 'multiply') {
    res.json({
      "result": multiply(numbers)
    });
  } else if (what === 'double') {
    res.json({
      "result": double(numbers)
    });
  } else {
    res.json({
      "error": "Please provide a number!"
    });
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});