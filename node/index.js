const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

function getConnection() {
  return mysql.createConnection(config);
}

const initConnection = getConnection();
initConnection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  const createTableSql = `
    CREATE TABLE IF NOT EXISTS people (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255)
    )
  `;
  initConnection.query(createTableSql, (err) => {
    if (err) throw err;
    console.log('Table "people" created or already exists.');
    initConnection.end();
  });
});


app.get('/', (req, res) => {
  const connection = getConnection();
  const name = 'Ruben Fábio' + new Date().toISOString();
  const insertSql = `INSERT INTO people(name) VALUES('${name}')`;

  connection.query(insertSql, (err) => {
    if (err) throw err;

    const selectSql = 'SELECT name FROM people';
    connection.query(selectSql, (err, results) => {
      if (err) throw err;

      let html = '<h1>Full Cycle Rocks!</h1><ul>';
      results.forEach(person => {
        html += `<li>${person.name}</li>`;
      });
      html += '</ul>';

      res.send(html);
      connection.end();
    });
  });
});

app.listen(port, () => {
  console.log(`Node.js app listening on port ${port}`);
});
