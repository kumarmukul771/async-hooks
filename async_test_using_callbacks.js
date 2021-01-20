const start = () => {
  console.log("Start Demo");
  download(function () {
    process(function () {
      upload(function () {
        del(function () {
          console.log("End Demo");
        });
      });
    });
  });
};
const download = (callback) => {
  console.log("Download Start");
  setTimeout(() => {
    console.log("Download End");
    callback();
  }, 3000);
};

const process = (callback) => {
  console.log("Process Start");
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
    callback();
  }, 1000);
};

start();
