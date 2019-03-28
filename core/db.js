var knex = require('knex')({
    client: 'pg',
   
    connection: {
      host : '127.0.0.1',
      port: 5432,
      user : 'postgres',
      password : 'postgres',
      database : 'mytodo'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: '/home/vvdn/Desktop/hapi-pg/core/migrations'
    },
    seeds: {
      directory: '/home/vvdn/Desktop/hapi-pg/core/seeds'
    }
  });

 module.exports.db=knex
