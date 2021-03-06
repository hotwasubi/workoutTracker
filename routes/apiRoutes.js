const db = require('../models/');

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workoutdb => {
            res.json(workoutdb);
        })
        .catch(err => {
            res.status(400).json(err);
        })
    });
    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.update(
            {
                _id: req.params.id
            },
            {
                $push:
                {
                    exercises:
                    {
                        type: req.body.type,
                        name: req.body.name,
                        duartion: req.body.duration,
                        weight: req.body.duration,
                        reps: req.body.reps,
                        sets: req.body.sets,
                        distance: req.body.distance
                    }
                }
            })
            .then(workoutdb => {
                res.json(workoutdb)
            })
            .catch(err => {
                res.json(err)
            })
    });
    app.post("/api/workouts", ({ body }, res ) => {
        db.Workout.create(body)
        .then(workoutdb => {
            res.json(workoutdb);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    });
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).limit(7)
        .then(workoutdb => {
            res.json(workoutdb);
        })
        .catch(err => {
            res.json(err);
        });
    });
}