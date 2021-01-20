const async = require("async");

const startDemo = () => {
  console.log("Starting Demo");
  const events = ["Download", "Process", "Upload", "Del"];

  async.eachSeries(
    events,
    (event, callback) => {
      process(event, callback);
    },
    (err) => {
      if (!err) console.log(`Ending Demo`);
    }
  );
};

const process = (processType, callback) => {
  let processTime = 0;
  switch (processType) {
    case "Download":
      processTime = 2000;
      break;
    case "Process":
      processTime = 1000;
      break;
    case "Upload":
      processTime = 4000;
      break;
    case "Del":
      processTime = 100;
      break;
  }
  setTimeout(function () {
    console.log("Finished : " + processType);
    callback();
  }, processTime);
};

startDemo();