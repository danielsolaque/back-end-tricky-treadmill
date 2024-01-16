const express = require("express");
const data = require("./data");

const app = express();

//Routes:

//Whole list of machines (all brands) when click to botton  =>> /all-brands
//Partial List of machines (top brands)=>> /top-brands

//==>>lis of models ==>/all-models/:brand
//==>>lis of reviews per model==>/all-reviews/:model
//Partial list of reviews -top 3 most useful- => /top-reviews
//Botton create a new review==>> /review

app.get("/", (req, res) => {
  res.send("This is the API for trickyTreadmill.com! ");
});

app.get("/all-brands", (req, res) => {
  res.json(data.brands);
});

app.get("/top-brands", (req, res) => {
  const topBrandsFilter = data.brands.filter((brand) => brand.isTop);
  res.json(topBrandsFilter);
});

module.exports = app;
