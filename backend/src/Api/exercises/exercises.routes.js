const router = require("express").Router();
const exerciseController = require("./exercises.controller");

// Create Exercise
router.post("/", exerciseController.createExercise);

// Delete Exercise
router.delete("/:id", exerciseController.deleteExercise);

module.exports = router;
