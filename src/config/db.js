const mongoose = require("mongoose");

// connect to your database here:

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-2", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

/**
 * ready states being:

0: disconnected
1: connected
2: connecting
3: disconnecting
 */

console.log(`mongoose connection state ${mongoose.connection.readyState}`);
