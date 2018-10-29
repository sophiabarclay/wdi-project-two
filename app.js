const env = require('./config/environment');

// Express
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Mongoose
const mongoose = require('mongoose');
mongoose.connect(env.dbUri);

// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true}));

// Method Override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Session


// Auth
const auth = require('./lib/auth');
app.use('*', auth.checkAuthStatus);

// Routes
const router = require('./config/routes');
app.use(router);

app.listen(env.port, () => console.log(`Express is listening on port ${env.port}`));
