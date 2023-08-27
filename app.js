

const express = require('express');
const app = express();
const path = require('path')
const bodyparser = require('body-parser')
const session = require('express-session')
const { v4: uuidv4 } = require('uuid')
const nocache = require('nocache')

const router = require('./router');
// const nocache = require('nocache');

const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(nocache());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

// Load static assets
app.use('/static', express.static(path.join(__dirname, 'public')))


app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
})) 
app.use('/', router)
app.use('/route', router)
app.listen(port, () => console.log("http://localhost:3000/ " + port));
