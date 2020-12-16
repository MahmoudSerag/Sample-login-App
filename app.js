// requiremet of applicatoin
const express = require('express');
const app = express();
const path = require(`path`);
const bodyParser = require('body-parser');
const loginPage = require('./routes/login.js');
const plogin = require('./routes/plogin.js');

// using express json
app.use(express.json());

// using body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));


// using static files
app.use(express.static(path.join(__dirname, './public')));

app.set('view engine', 'ejs');

// view pages
app.use(loginPage);
app.use(plogin);

// sitting port
const port = process.env.PORT || 3000;

// listenning to port
app.listen(port, () => console.log('connected to port 3000 ...'));