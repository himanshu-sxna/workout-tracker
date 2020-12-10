const express = require("express");
const db = require("../models");
const mongoose = require("mongoose");

const router = express.Router();

mongoose.connect(process.env.MONGODB_URI, 
{   useNewUrlParser: true, 
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

module.exports = router;