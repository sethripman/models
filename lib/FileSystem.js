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
  const fileArray = await fs.readdir(path);
  return Promise.all(fileArray.map(file => readJSON(file)));
};

module.exports = {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON
};

// fs.readdir(path, function(err, items) {
//     console.log(items);
 
//     for (var i=0; i<items.length; i++) {
//         console.log(items[i]);
//     }
// });
