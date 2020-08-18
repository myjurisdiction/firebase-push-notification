const admin = require("firebase-admin");
const path = require("path");

const serviceAccount = require(path.join(__dirname, "serviceAccountKey.json"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://adroit-marking-277810.firebaseio.com",
});

const resgistrationToken =
  "Enter registration token of the device (emulator or any device which is bein debugged) here which you will get from the log console";

const payload = {
  data: {
    title: "Hello user.",
    content: "This is an example of a push notification",
  },
};

const options = {
  priority: "High",
  timeToLive: 60 * 60 * 24,
};

admin
  .messaging()
  .sendToDevice(resgistrationToken, payload, options)
  .then((response) => console.log("sent successfully.", response))
  .catch((error) =>
    console.log(
      "Message could not be sent to the user due to the following resasons : ",
      error
    )
  );
