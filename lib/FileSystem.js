const fs = require('fs').promises;

const mkdirp = (pathString) => {
  return fs.mkdir(pathString, { recursive: true });
};

const writeJSON = (path, input) => {
  const stringifiedInput = JSON.stringify(input);
  return fs.writeFile(path, stringifiedInput);
};

module.exports = {
  mkdirp,
  writeJSON,
};


//.then(contents => fs.writeFile(dest, contents));
