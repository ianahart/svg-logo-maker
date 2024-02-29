const fs = require('fs');

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
