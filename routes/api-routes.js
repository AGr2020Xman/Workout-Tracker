const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((workout) => {
      res.status(200).json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  });
  
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .sort({ date: -1 })
    .then((workout) => {
      res.status(200).json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  });
  
router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((workout) => {
      res.status(201).json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  });
  
// Route to add an exercise
router.put("/api/workouts/:id", ({ params, body }, res) => {
	db.Workout.findOneAndUpdate({ _id: params.id }, { $push: { exercises: body } }, { new: true })
	.then(dbWorkout => res.json(dbWorkout))
	.catch(err => res.json(err));
});
  
module.exports = router;