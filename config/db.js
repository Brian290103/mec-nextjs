import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'http://172.16.15.75/',
  user: 'root',
  password: '',
  database: 'mec_db',
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to database: ', error);
    return;
  }

  console.log('Connected to database');
});

export default connection;

// http://172.16.15.75/
