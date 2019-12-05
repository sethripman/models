const fs = require('fs').promises;
const { mkdirp, writeJSON, readJSON, readDirectoryJSON, updateJSON, deleteFile } = require('../lib/FileSystem');





//instead of a specific string in the path part of the test, toHaveBeenLastCalledWith(expect.any(String), {key:value})

// jest.mock('fs', () => ({
//   promises: {
//     mkdir: jest.fn(() => Promise.resolve('my directory')),
//     writeFile: jest.fn(() => Promise.resolve()),
//     readFile: jest.fn(() => Promise.resolve(JSON.stringify({ name: 'dog' }))),
//     readdir: jest.fn(() => Promise.resolve([
//       './name',
//       './secondname'
//     ])),
//     unlink: jest.fn(() => Promise.resolve()),
//   }
// }));

// describe('FileSystem functions', () => {

//   describe('mkdirp function', () => {

//     it('makes a directory and all parent directories', () => {
//       return mkdirp('my/cool/path/name')
//         .then(() => {
//           expect(fs.mkdir).toHaveBeenLastCalledWith('my/cool/path/name', { recursive: true });
//         });
//     });  
//   });

//   describe('writeJSON function', () => {

//     it('writes into a file as JSON', () => {
//       return writeJSON('my/cool/path/name', { name: 'test' })
//         .then(() => {
//           expect(fs.writeFile).toHaveBeenLastCalledWith('my/cool/path/name', 
//             '{"name":"test"}');
//         });
//     });
//   });

//   describe('readJSON function', () => {

//     it('reads a JSON object from a file', () => {
//       return readJSON('my/cool/path/name')
//         .then(dog => {
//           expect(fs.readFile).toHaveBeenLastCalledWith('my/cool/path/name', 'utf8');
//           expect(dog).toEqual({ name: 'dog' });
//         });
//     });
//   });

//   describe('readDirectoryJSON function', () => {

//     it('reads JSON objects from all files in a directory', () => {
//       return readDirectoryJSON('my/cool/path/name')
//         .then(allDogs => {
//           expect(fs.readdir).toHaveBeenLastCalledWith('my/cool/path/name');
//           expect(allDogs).toEqual([
//             { name: 'dog' },
//             { name: 'dog' }
//           ]);
//         });
//     });
//   });

//   describe('updateJSON function', () => {

//     it('updates a file with the provided object', () => {
//       return updateJSON('my/cool/path/name', { age: 6 })
//         .then(updatedDog => {
//           expect(fs.readFile).toHaveBeenLastCalledWith('my/cool/path/name', 'utf8');
//           expect(updatedDog).toEqual({ name: 'dog', age: 6 });
//         });
//     });
//   });

//   describe('deleteFile function', () => {

//     it('deletes a file', () => {
//       return deleteFile('my/cool/path/name')
//         .then(() => {
//           expect(fs.unlink).toHaveBeenLastCalledWith('my/cool/path/name');
//         });
//     });
//   });

// });
