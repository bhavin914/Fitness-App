const router = require("express").Router();

const programRoute = require("./Api/programs/program.routes");
const exerciseRoute = require("./Api/exercises/exercises.routes");

router.use("/program", programRoute);

router.use("/exercises", exerciseRoute);

module.exports = router;
