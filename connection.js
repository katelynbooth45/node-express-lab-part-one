const { Pool } = require("pg");
const credentials = new Pool({
  user: "postgres",
  password: "verde",
  host: "localhost",
  port: 5432,
  database: "postgres",
  ssl: false
});
module.exports = credentials;