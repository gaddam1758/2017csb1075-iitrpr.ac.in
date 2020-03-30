const mongoose = require("mongoose");

module.exports = function(uri) {
    console.log(uri)
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
  const connection = mongoose.connection;
  connection.on("error",()=>{
      console.log("mongoose connection error")
  })
  connection.once("open", ()=>{
      console.log("mongoose connected successfully");
  })
};
