const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express()
const port = 9000
const User = require("./routes/User")
const connectDB = require("./db");
const Internship = require('./routes/Internship');

app.use(express.static("Client/build"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
  //allow cross origin requests
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, PUT, OPTIONS, DELETE, GET"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cookieParser());

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});
connectDB();

app.use("/",User)
app.use("/",Internship)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})