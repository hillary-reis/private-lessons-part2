const { Pool } = require ('pg');

module.exports = new Pool ({
  user: 'postgres',
  password: '1209',
  host: 'localhost',
  port: 5432,
  database: 'my_teacher'
});