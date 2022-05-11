const fs = require("fs");

const findAllFiles = () => {
  return new Promise((resolve, reject) => {
    fs.readdir("./data/", (error, filenames) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(filenames);
    });
  });
};

const retrieveEntity = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/" + fileName + ".json", "utf8", (error, data) => {
      if (error) {
        console.log(error);
        reject(error);
        return;
      }
      resolve(JSON.parse(data));
    });
  });
};

const saveEntity = (entity) => {
  new Promise((resolve, reject) => {
    fs.writeFile(
      "./data/" + entity.id + ".json",
      JSON.stringify(entity),
      (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve("OK");
      }
    );
  });
};

module.exports = { saveEntity, findAllFiles, retrieveEntity };
