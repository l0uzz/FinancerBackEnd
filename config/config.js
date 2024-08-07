require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "ssl": false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Defina como true se o certificado for válido e confiável
      }
    },
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "root",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Defina como true se o certificado for válido e confiável
      }
    },
    "dialect": "postgres"
  }
}