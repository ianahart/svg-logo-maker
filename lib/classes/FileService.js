const fs = require('fs');

// A service class who's primary role is to take in a filename and svg data
// and write that svg data to a file
class FileService {
  fileName;
  data;

  constructor(fileName, data) {
    this.fileName = fileName;
    this.data = data;
  }

  writeToFile() {
    fs.writeFile(this.fileName, this.data, (err) => {
      err ? console.log(err) : console.log('Generated logo.svg');
    });
  }
}

module.exports = FileService;
