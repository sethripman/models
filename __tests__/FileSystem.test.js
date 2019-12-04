const fs = require('fs').promises;
const { mkdirp, writeJSON, readJSON, readDirectoryJSON } = require('../lib/FileSystem');

jest.mock('fs', () => ({
  promises: {
    mkdir: jest.fn(() => Promise.resolve('my directory')),
    writeFile: jest.fn(() => Promise.resolve()),
    readFile: jest.fn(() => Promise.resolve(JSON.stringify({ name: 'dog' }))),
    readdir: jest.fn(() => Promise.resolve([
      './name',
      './secondname'
    ])),
  }
}));

describe('FileSystem functions', () => {

  describe('mkdirp function', () => {

    it('makes a directory and all parent directories', () => {
      return mkdirp('my/cool/path/name')
        .then(() => {
          expect(fs.mkdir).toHaveBeenLastCalledWith('my/cool/path/name', { recursive: true });
        });
    });  
  });

  describe('writeJSON function', () => {

    it('writes into a file as JSON', () => {
      return writeJSON('my/cool/path/name', { name: 'test' })
        .then(() => {
          expect(fs.writeFile).toHaveBeenLastCalledWith('my/cool/path/name', 
            '{"name":"test"}');
        });
    });
  });

  describe('readJSON function', () => {

    it('reads a JSON object from a file', () => {
      return readJSON('my/cool/path/name')
        .then(dog => {
          expect(fs.readFile).toHaveBeenLastCalledWith('my/cool/path/name', 'utf8');
          expect(dog).toEqual({ name: 'dog' });
        });
    });
  });

  describe('readDirectoryJSON function', () => {

    it('reads JSON objects from all files in a directory', () => {
      return readDirectoryJSON('my/cool/path/name')
        .then(allDogs => {
          expect(fs.readdir).toHaveBeenLastCalledWith('my/cool/path/name');
          expect(allDogs).toEqual([
            { name: 'dog' },
            { name: 'dog' }
          ]);
        });
    });
  });

});
