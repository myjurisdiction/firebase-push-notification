"use strict";

const express = require("express");
const figlet = require("figlet");

(function () {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.set("view engine", "ejs");

  app.get("/", (req, res) => {
    res.render("welcome.ejs");
  });

  require('./src/send');

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
})();
