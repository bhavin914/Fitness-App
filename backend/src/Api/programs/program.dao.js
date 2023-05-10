const Program = require("./program.model");

const buildSaveProgramJson = (props) => {
  const json = {};
  json.name = props.name;
  json.exercises = props.exercises;
  return json;
};

module.exports.createProgram = async (props) => {
  try {
    const program = new Program(buildSaveProgramJson(props));
    const result = await program.save();
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports.updateProgram = async (programId, props) => {
  try {
    const program = await Program.findOneAndUpdate({ _id: programId }, props, {
      new: true,
    });
    return program;
  } catch (error) {
    throw error;
  }
};

module.exports.removeProgram = async (id) => {
  try {
    const program = await Program.findOneAndDelete({ _id: id });
    return program;
  } catch (error) {
    throw error;
  }
};
