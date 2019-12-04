const fs = require('fs').promises;

const mkdirp = (pathString) => {
  return fs.mkdir(pathString, { recursive: true });
};

const writeJSON = () -> {
    return fs.writeFile();
};

module.exports = {
  mkdirp,
};
