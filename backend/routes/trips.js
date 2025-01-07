const express = require('express');
const router = express.Router();

router.post('/create', (req, res) => {
  const { location, days, budget, size } = req.body;

  if (!location || !days || !budget || !size) {
    return res.status(400).json({error: 'All fields must be filled out'});
  }

  const newTrip = {
    id: trips.length + 1,
    location,
    days,
    budget, 
    size,
  };

  trips.push(newTrip);
  
  res.status(201).json(newTrip);
});

module.exports = router;
