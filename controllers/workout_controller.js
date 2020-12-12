const express = require("express");
const db = require("../models");
const mongoose = require("mongoose");
require('dotenv').config()

const router = express.Router();

mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_ATLAS, 
{   w: "majority",
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

//get workouts form mongoDB
router.get("/api/workouts", function(req, res){
    db.Workout.find({})
        .then((data) => {
            res.json(data);
        });
});

// get all workouts to display stats
router.get("/api/workouts/range", function(req, res){
    db.Workout.find({})
        .then((data) => {
            res.json(data);
        });
});

// add exercise to workout
router.put("/api/workouts/:workout_id", function(req, res){

    let workoutID = req.params.workout_id; // workout id to be updated from url
    let exerciseData = req.body; // exercise data to be added
    // find workout by id and push exercise data to exercise array
    db.Workout.findByIdAndUpdate(
        workoutID,
        {"$push": {"exercises": exerciseData}},
        {"new": true, "upsert": true},
        function (err, result){
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        }
    )
});

// insert a new workout
router.post("/api/workouts/undefined", function(req, res){
    
    let workoutData = req.body; // get form data 

    let newWorkout = {

        day: Date.now(),
        exercises: [
            {
                type: workoutData.type,
                name: workoutData.name,
                distance: workoutData.distance,
                duration: workoutData.duration,
                weight: workoutData.weight,
                reps: workoutData.reps,
                sets: workoutData.sets
            }
        ]
    }
    // create and save new workout to mongoDB
    db.Workout.create(newWorkout)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        console.error(err);
      });

});

module.exports = router;