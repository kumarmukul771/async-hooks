const async = require("async");

const start = () => {
  console.log("Start Demo");
  async.waterfall([download, process, upload, del], (err, data) => {
    if (err) console.log(`There was an error in the demo : ${err}`);
    else console.log(`Demo complete successfully ${data}`);
  });
};
const download = (callback) => {
  console.log("Download Start");
  setTimeout(() => {
    console.log("Download End");
    // callback("Download Failed");
    callback(null, "Download Url");
    // callback("Download Failed", "Download Url");
  }, 3000);
};

const process = (data, callback) => {
  console.log(`Process Start ${data}`);
  setTimeout(() => {
    console.log("Process End");
    callback();
  }, 2000);
};

const upload = (callback) => {
  console.log("Upload Start");
  setTimeout(() => {
    console.log("Upload End");
    callback();
  }, 4000);
};

const del = (callback) => {
  console.log("Delete Start");
  setTimeout(() => {
    console.log("Delete End");
    callback(null,"Demo going to be complete");
  }, 1000);
};

start();
