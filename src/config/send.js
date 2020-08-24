const admin = require("firebase-admin");
const path = require("path");

const serviceAccount = require(path.join(__dirname, "serviceAccountKey.json"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mobitrak-be1c7.firebaseio.com",
});

// const serviceAccount = require(path.join(__dirname, "serviceAccountKey.json"));

// in case you have multiple tokens then you can use array as well.
const resgistrationToken =
  "ejkP5N3TRreAg2IopXBb19:APA91bGCTjyJ5GQcxnr4olbGDnP1f8jMeW2GbY-Z-PvbnC4X2OilmelLOCFiOaArvebASdjbBNxKPyXzsQCc93FYH-NNij--M6TtBd156f5Iii9bQ30OHqLSsE-8zkSxkkBV7nnut_vD";

const message = {
  notification: {
    title: "Quote",
    body: "Success loves prepration.",
  },
};

const options = {
  priority: "High",
  timeToLive: 60 * 60 * 24,
};

admin
  .messaging()
  .sendToDevice(resgistrationToken, message, options)
  .then((response) => console.log("sent successfully.", response))
  .catch((error) =>
    console.log(
      "Message could not be sent to the user due to the following resasons : ",
      error
    )
  );
