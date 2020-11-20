const config = require('dotenv').config()

const { DB_FILE_NAME } = process.env

module.exports = {
  development: {
    client: 'sqlite',
    connection: {
      filename: `${process.cwd()}/db/${DB_FILE_NAME}`
    },
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true
  },

  staging: { },
  production: { }
};
