const express = require("express");

const app = express ();

app.get("/", (req, res) => {
  res.send("Welcome to Digitech Company");
});

app.get("/me", (req, res) => {
  res.send("Webmaster : Muhammad Sajjad Haider     Student Number : 2021384");

});

app.listen(5000, () => {
  console.log("listening");
});