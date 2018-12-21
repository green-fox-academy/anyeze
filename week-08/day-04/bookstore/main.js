'use strict'
const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const PORT = 3000;

app.use(express.json());

const conn = mysql.createConnection({
  user: "root",
  password: "password",
  database: "bookstore",
  port: 3306,

});

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/author', (req, res) => {
  const sql = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price   
              FROM book_mast, author, category, publisher 
              WHERE author.aut_id = book_mast.aut_id
              AND category.cate_id = book_mast.cate_id
              And publisher.pub_id = book_mast.pub_id`;
              
  conn.query(sql, (err, data) => {
    if (err) {
      console.log(err.message);
      res.status(500).json({
        error: 'Internal server error'
      });
      return;
    }
    res.json(data);
  })
});

  app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
  });