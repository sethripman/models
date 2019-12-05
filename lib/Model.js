const fs = require('fs').promises;
const { mkdirp, writeJSON, readJSON, readDirectoryJSON, updateJSON, deleteFile } = require('../lib/FileSystem');
const uuid = require('uuid/v4');

module.exports = class Model {
  constructor(modelName, modelSchema) {
    this.modelName = modelName;
    mkdirp(`./${modelName}`);
    this.filePath = `./${modelName}`;
    this.itemIds = [];
  }
  
  create(object) {
    const randomId = uuid();
    this.itemIds.push(randomId);
    return writeJSON(this.filePath + `/${randomId}`, object);
  }
  
  findById(modelId) {
    return readJSON(this.filePath + `/${modelId}`);
  }

  find() {
    return readDirectoryJSON(this.filePath);
  }



};
  



// const mkdirp = (pathString) => {
//   return fs.mkdir(pathString, { recursive: true });
// };

// const writeJSON = (path, input) => {
//   const stringifiedInput = JSON.stringify(input);
//   return fs.writeFile(path, stringifiedInput);
// };

// const readJSON = async(path) => {
//   const fileContents = await fs.readFile(path, 'utf8');
//   return JSON.parse(fileContents);
// };

// const readDirectoryJSON = async(path) => {
//   const filePathArray = await fs.readdir(path);
//   return Promise.all(filePathArray.map(filePath => readJSON(filePath)));
// };

// const updateJSON = async(path, object) => {
//   const fileContents = await readJSON(path);
//   const entries = Object.entries(object);
//   for(let i = 0; i < entries.length; i++) {
//     fileContents[entries[i][0]] = entries[i][1];
//   }
//   return fileContents;
// };

// const deleteFile = async(path) => {
//   return await fs.unlink(path);
// };

// module.exports = {
//   mkdirp,
//   writeJSON,
//   readJSON,
//   readDirectoryJSON,
//   updateJSON,
//   deleteFile
// };
