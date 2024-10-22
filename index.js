const express = require("express");
const sgMail = require("@sendgrid/mail");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3001;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(express.static(path.join(__dirname, ".", "build")));

app.get("/DroneStudio", (req, res) => {
  res.sendFile(
    path.join(__dirname, ".", "build", "Drone_Studio_x86-64-win-gnu.exe")
  );
});

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "build", "index.html"));
});

// app.post("/contact", (req, res) => {
//   console.log(req);
//   const msg = {
//     to: `RECIPIENT_EMAIL`, // Change to your recipient
//     from: "SENDER_EMAIL", // Change to your verified sender
//     subject: req.body.subject,
//     text: `Message from ${req.body.email}:\n${req.body.message}`,
//   };
//   try {
//     sgMail.send(msg);
//     res.send("Message Successfully Sent!");
//   } catch (error) {
//     res.send("Message Could not be Sent");
//   }
// });

app.listen(PORT, "::", () => {
  console.log("Listening on Port:", PORT);
});
