//load modules
const express = require('express');
const cors = require('cors');
const tripRoutes = require('./routes/trips.js');
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded( {extended: true}));

//routes
app.use('/api/trips', tripRoutes);

//start server
app.listen(5000, () => {
  console.log("Server is connected to http://localhost:5000")
})
