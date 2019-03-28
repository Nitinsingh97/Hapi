'use strict';
const route= require('/home/vvdn/Desktop/hapi-pg/routes/route');
var server=route.server;
const activities= require('/home/vvdn/Desktop/hapi-pg/activitylist');
const activitylist=activities.activity

const Hapi = require('hapi');
const Joi = require('joi');
const dbc = require('/home/vvdn/Desktop/hapi-pg/core/db');
var db=dbc.db

const init = async () => {
  await db.migrate.latest()
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
