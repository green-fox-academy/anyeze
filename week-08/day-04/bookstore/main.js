'use strict'
require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql');

const path = require('path');
const PORT = 3000;

app.use(express.json());
app.use('/static', express.static('static'));


const conn = mysql.createConnection({
  user: "root",
  password: "password",
  database: "bookstore",
  port: 3306,

});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

conn.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('connection established');
});

app.get('/books', (req, res) => {
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
app.get('/category', (req, res) => {
  const sql = `SELECT cate_descrip FROM category`;

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
app.get('/publisher', (req, res) => {
  const sql = `SELECT pub_name FROM newpublisher`;

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
app.post('/filter', (req, res) => {

  const sql = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price   
  FROM book_mast, author, category, publisher 
  WHERE author.aut_id = book_mast.aut_id
  AND category.cate_id = book_mast.cate_id
  And publisher.pub_id = book_mast.pub_id`;
  const { cate_descrip ,price_name, pub_name  } = req.body;



if (cate_descrip && cate_descrip!= '' && cate_descrip!= undefined) {
   if (categ_name != 'all') {
     sql += ` AND cate_descrip = '${cate_descrip}'`;
   }
 }

 if (pub_name && pub_name!= '' && pub_name!= undefined) {
  if (pub_name != 'all') {
    sql += ` AND cate_descrip = '${pub_name}'`;
  }
}
if (price_name && price_name!= '' && price_name!= undefined) {
  if (price_name != 'all') {
    sql += ` AND cate_descrip = '${price_name}'`;
  }
}
ssql+=';';

  conn.query(sql, (err,data) => {
    if(err){
      console.log(err.message);
      res.status(500).json({
        error: 'internal server error'
      });
      return;
    }
    res.json(data)
  });
});


app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});