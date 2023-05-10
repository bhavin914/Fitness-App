const programDao = require("./program.dao");

/**
 * Create a Program
 *
 * @param {props} props - body
 */
module.exports.createProgram = async (props) => {
  try {
    const result = await programDao.createProgram(props);
    return result;
  } catch (error) {
    throw error;
  }
};

/**
 * Update a Program
 *
 * @param {programId} props - body
 * @param {props} props - body
 */
module.exports.updateProgram = async (programId, props) => {
  try {
    const result = await programDao.updateProgram(programId, props);
    return result;
  } catch (error) {
    throw error;
  }
};

/**
 * Delete a Program
 *
 * @param {props} id - program id
 */
module.exports.removeProgram = async (id) => {
  try {
    const result = await programDao.removeProgram(id);
    return result;
  } catch (error) {
    throw error;
  }
};
