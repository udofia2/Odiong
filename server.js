const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const nodemailerSendgrid = require("nodemailer-sendgrid");
const { PORT, url, SENDGRID_API_KEY } = require("./src/config/env");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "pug");
app.set("views", "src/views");

app.use(express.static(path.join(__dirname, "src/public")));
app.get("/", (req, res) => {
  console.log(res.body);
  res.render("index");
});
app.get("/portfolio", (req, res) => {
  res.render("portfolio");
});

app.post("/forms", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport(
      nodemailerSendgrid({
        apiKey: SENDGRID_API_KEY,
      })
    );

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${req.body.name} 👻" <${req.body.email}> udofia.herokuapp.com`, // sender address
      to: "enalsy22@gmail.com", // list of receivers
      subject: req.body.subject, // Subject line
      text: "Hello world?", // plain text body
      html: req.body.message, // html body
    });
    res.send("OK");
  } catch (error) {
    console.log(error);
    res.status(500).json("message not sent");
  }
});

app.listen(PORT, () => console.log(`Server is running on ${url}:${PORT}`));
