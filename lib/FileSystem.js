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

module.exports = {
  mkdirp,
  writeJSON,
  readJSON
};


//.then(contents => fs.writeFile(dest, contents));
