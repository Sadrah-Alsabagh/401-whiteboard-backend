'use strict';

const server = require('./server');
require ('dotenv').config();

const {db} = require('./models/index');
db.sync().then(() => {server.start(process.env.PORT || 3000);}).catch(console.error);



