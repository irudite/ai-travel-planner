//load modules
const express = require('express');
const cors = require('cors');
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded( {extended: true}));

//routes
app.get("/", (req, res) => {
  console.log("Working");
  res.send("fart");
});

app.get("/api/trips/", (req, res) => {
  console.log("please just fucking work");
  res.send("FUCKING WORK");
});

const trips = require('./routes/trips');

app.use('/api/trips', trips);

//start server
app.listen(5000, () => {
  console.log("Server is connected to http://localhost:5000")
});
