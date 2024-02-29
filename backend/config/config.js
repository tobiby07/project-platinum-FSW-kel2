require("dotenv").config();

module.exports =
{
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME_TEST,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "test": {
    // "username": "root",
    // "password": null,
    // "database": "database_test",
    // "host": "127.0.0.1",
    // "dialect": "mysql"
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME_TESTING,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "secret": process.env.SECRET_KEY,
  "dbUrl": process.env.DB_URL,
  "jwtExpires": process.env.JWT_EXPIRES
}
