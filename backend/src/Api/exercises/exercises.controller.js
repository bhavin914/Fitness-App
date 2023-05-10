const exerciseService = require("./exercises.services");

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Create a Exercises
 */

module.exports.createExercise = async (req, res, next) => {
  try {
    const props = req.body;
    const result = await exerciseService.createExercise(props);
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Delete a Exercises From DataBase
 */

module.exports.deleteExercise = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await exerciseService.deleteExercise(id);
    return res.json(result);
  } catch (error) {
    next(error);
  }
};
