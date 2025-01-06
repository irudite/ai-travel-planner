const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(bodyParser.json());

//routes
app.get('/', (req, res) => {
  res.send('It worked!')
});

//Start server
app.listen(PORT, () => {
  console.log('Server running on port: ' + PORT);
})
