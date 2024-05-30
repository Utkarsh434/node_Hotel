const express = require('express')
const app = express()
const _ = require('lodash');
const db = require('./db');
require('dotenv').config(); //ab server ko pata hai kki uske pass dotenv file hai  or uss dotenv file se wo har variable ko utha raha hai 
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000 ;


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


app.listen(PORT,()=>{
  console.log("listning to port 3000");
})