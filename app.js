"use strict";

const express = require("express");
require("./src/config/db");

/** Creating models */
require("./src/models/User");

const figlet = require("figlet");
const app = express();

// db.on("error", console.error.bind(console, "connection error !"));
// db.once("open", () => {
//   console.log("database connection rocks :) !!");
// });

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("welcome.ejs");
});

require('./src/config/send');

const PORT = 5001;

app.listen(PORT, () => {
  figlet(
    "firebase-push",
    {
      fornt: "Standard",
      horizontalLayout: "full",
    },
    (err, data) => {
      if (err) return;
      console.log(data);
    }
  );
  console.log(`Check out port : ${PORT}`);
});
