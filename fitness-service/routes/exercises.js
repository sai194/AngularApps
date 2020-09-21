const express = require('express');
const router = express.Router();

const exercises = require('../data/exercises');

router.get('/lookup', function(req, res, next) {

  console.log(exercises.availableExercises);
   res.status(200).json(exercises.availableExercises);
});

module.exports = router;
