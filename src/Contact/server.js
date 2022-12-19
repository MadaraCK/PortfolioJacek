const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config();

const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: "o2.pl",
  auth: {
    user: "radek_mikolaj@o2.pl",
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post("https://jacekportfolio55689.netlify.app/contact", (req, res) => {
  const { from, email, message } = req.body;

  const mailOptions = {
    from,
    to: email,
    subject: "Temat wiadomości",
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.sendStatus(500); // jeśli wystąpił błąd, wyślij kod błędu 500
    } else {
      console.log(info.response);
      res.sendStatus(200); // jeśli wszystko poszło dobrze, wyślij kod statusu 200
    }
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
