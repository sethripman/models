const fs = require('fs').promises;

const mkdirp = (pathString) => {
  return fs.mkdir(pathString, { recursive: true });
};

const writeJSON = (path, input) => {
  const stringifiedInput = JSON.stringify(input);
  return fs.writeFile(path, stringifiedInput);
};

const readJSON = async(path) => {
  const fileContents = await fs.readFile(path, 'utf8');
  return JSON.parse(fileContents);
};

const readDirectoryJSON = async(path) => {
  const filePathArray = await fs.readdir(path);
  return Promise.all(filePathArray.map(filePath => readJSON(filePath)));
};

const updateJSON = async(path, object) => {
  const fileContents = await readJSON(path);
  const entries = Object.entries(object);
  for(let i = 0; i < entries.length; i++) {
    fileContents[entries[i][0]] = entries[i][1];
  }
  return fileContents;
};

module.exports = {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON
};
