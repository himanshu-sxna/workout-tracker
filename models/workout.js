const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [{

        type:{
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        duration:{
            type: Number,
            min: 0,
            default: 0,
            required: true,
        },
        distance:{
            type: Number,
            min: 0,
            default: 0,
        },
        weight:{
            type: Number,
            min: 0,
            default: 0,
            required: true,
        },
        reps:{
            type: Number,
            min: 0,
            default: 0,
        },
        sets:{
            type: Number,
            min: 0,
            default: 0,
        },
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;