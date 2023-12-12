require('dotenv').config()
const express = require("express");
const path = require("path");
const fs = require('fs')
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const morgan = require('morgan')
const nodemailerSendgrid = require("nodemailer-sendgrid");

const app = express();

// setup the logger
app.use(morgan("dev"));

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "URLs to trust of allow");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header("Access-Control-Allow-Headers", "*");
  if ("OPTIONS" == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "pug");
app.set("views", "src/views");

app.use(express.static(path.join(__dirname, "src/public")));
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/flowexpresscourier", (req, res) => {
  res.render("projects/flowexpresscourier");
});

app.get("/searchdomain", (req, res) => {
  res.render("projects/domains");
});

app.get("/workflowlink", (req, res) => {
  res.render("projects/workflowlink");
});

app.get("/temadepharm", (req, res) => {
  res.render("projects/temadepharm");
});

app.get("/404page", (req, res) => {
  res.render("projects/404page");
});

app.post("/forms", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport(
      nodemailerSendgrid({
        apiKey: process.env.SENDGRID_API_KEY,
      })
    );

    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${req.body.name} 👻" <${req.body.email}> odiong.ng`, // sender address
      to: "enalsy22@gmail.com", // list of receivers
      subject: req.body.subject, // Subject line
      text: "Hello world?", // plain text body
      html: req.body.message, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.send("OK");
  } catch (error) {
    console.log(error);
    res.status(500).json("message not sent");
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on ${process.env.url}:${process.env.PORT}`)
);
