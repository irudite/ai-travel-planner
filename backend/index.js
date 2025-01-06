const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded( {extended: true} );

//routes
const tripRoutes = require('./routes/tripRoutes.js');
app.use('')

//Start server
app.listen(PORT, () => {
  console.log('Server running on port: ' + PORT);
});
