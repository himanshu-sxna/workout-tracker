const express = require("express");
const db = require("../models");
const mongoose = require("mongoose");

const router = express.Router();

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://MongoAdmin:iZogasgSs4ckcm82@basecluster.6zsug.mongodb.net/test?w=majority", { useNewUrlParser: true, useUnifiedTopology: true  });

//get workouts form mongoDB
router.get("/api/workouts", function(req, res){
    db.Workout.find({})
        .then((data) => {
            res.json(data);
        });
});

module.exports = router;