const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

connection.connect((error) => {
  if(error) {
    console.error('Sorry! Couldn\'t connect to the DB');
    return null;
  }
  console.log('Successfully connected to the DB');
});

function queryPromise(sql, sqlPlaceholder = []) {
  return new Promise((resolve, reject) => {
    connection.query(sql, sqlPlaceholder, (error, result) => {
      if(error) {
        reject(error);
        return null;
      }
      resolve(result);
    });
  });
}

module.exports = queryPromise;