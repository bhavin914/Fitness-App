const programService = require("./program.service");

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Create Program
 */

module.exports.createProgram = async (req, res, next) => {
  try {
    const props = req.body;
    const result = await programService.createProgram(props);
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Update Program
 */
module.exports.updateProgram = async (req, res, next) => {
  try {
    const props = req.body;
    const programId = req.params.id;
    console.log("props", props, programId);
    const result = await programService.updateProgram(programId, props);
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {req} req - Requests
 * @param {res} res - Response
 * @param {next} next - next
 * Delete Program
 */
module.exports.removeProgram = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await programService.removeProgram(id);
    return res.json(result);
  } catch (error) {
    next(error);
  }
};
