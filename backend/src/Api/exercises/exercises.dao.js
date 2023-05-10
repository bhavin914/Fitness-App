const Exercise = require("./exercises.model");

const buildSaveExercisesJson = (props) => {
  const json = {};
  json.name = props.name;
  json.length = props.length;
  return json;
};

module.exports.createExercise = async (props) => {
  try {
    const exercise = new Exercise(buildSaveExercisesJson(props));
    const result = await exercise.save();
    return result;
  } catch (error) {
    throw error;
  }
};
module.exports.deleteExercise = async (id) => {
  try {
    const dltExercise = await Exercise.findOneAndDelete({ _id: id });
    return dltExercise;
  } catch (error) {
    throw error;
  }
};
