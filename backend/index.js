const express = require('express');
const app = express();

app.use(express.json());

const tripRoutes = require('./routes/tripRoutes.js');
app.use('/api/trips', tripRoutes);

app.listen(5000, () => {
  console.log("Server is connected to http://localhost:5000")
})
