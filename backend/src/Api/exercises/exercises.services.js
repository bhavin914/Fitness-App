const exerciseDao = require("./exercises.dao");

module.exports.createExercise = async (props) => {
  try {
    const result = await exerciseDao.createExercise(props);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.deleteExercise = async (id) => {
  try {
    const result = await exerciseDao.deleteExercise(id);
    return result;
  } catch (error) {
    throw error;
  }
};
