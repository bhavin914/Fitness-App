const router = require("express").Router();
const programController = require("./program.controller");

// Create Program
router.post("/", programController.createProgram);

// Update Program
router.put("/:id", programController.updateProgram);

// Delete Program
router.delete("/:id", programController.removeProgram);

module.exports = router;
