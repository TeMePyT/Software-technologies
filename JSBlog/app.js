const express = require('express');
const config = require('./config/config.js');
const app = express();

require('./config/express.js')(app, config);
require('./config/passport.js')();
require('./config/routes.js')(app);
module.exports = app;
