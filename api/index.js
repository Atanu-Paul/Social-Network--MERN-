//importing all the required modules.
const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
require("dotenv").config();

//deflaring the port number
const port = process.env.PORT || 8000;

//initilizing the express module.
const app = express();

//setting up all the middlewares
app.use(morgan("dev"));

//a sample get route to check the server.
app.get("/", (req, res) => {
  res.send("HELLO World");
});

//setting up the express server to listen on the port
app.listen(port, () => {
  console.log(`Express server listening on port number ${port}`.bgGreen);
});
