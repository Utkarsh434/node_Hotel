const express = require('express')
const app = express()
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const Person  = require('./models/Person');
const menuItems = require('./models/menuItems');
const { connect } = require('mongoose');

app.get('/', function (req, res) {
  res.send('khadi ghammma')
})

const menuItemRoutes= require('./routes/menuItemRoutes');
app.use('/menu', menuItemRoutes);

const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);
//    /person pe hit  kiya fir gya personRoutes pe or personRoutes me check hoga ki get method hai ki post method  hai ki workTypes hai 


app.listen(3000,()=>{
  console.log("listning to port 3000");
})