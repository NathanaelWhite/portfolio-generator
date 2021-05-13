const fs = require("fs");

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      // if theres an error, reject the promise and send the arror to the promises .catch() method
      if (err) {
        reject(err);
        // return out of the function here to make sure the promise doesn't accidentally resolve
        return;
      }
      // if everything went well, resolve the promise and send the successful data to .then()
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      // if theres an error, reject the promise and send the arror to the promises .catch() method
      if (err) {
        reject(err);
        // return out of the function here to make sure the promise doesn't accidentally resolve
        return;
      }

      // if everything went well, resolve the promise and send the successful data to .then()
      resolve({
        ok: true,
        message: "File copied!",
      });
    });
  });
};

module.exports = { writeFile, copyFile };