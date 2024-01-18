const express = require("express");
const data = require("./data");

const app = express();

//Routes:

// - [x] Whole list of machines (all brands) when click to botton  =>> /all-brands
// - [x] Partial List of machines (top brands)=>> /top-brands
// - [x] Whole list of models associated to a specific brand => /models/:brandId (/models/8)
// - [x] Whole list of reviews associated to a specific model => /reviews/:modelId
// - [x] Whole list of reviews associated to a specific category => /reviews/:categoryId


//==>>lis of reviews per model==>/all-reviews/:model
//Partial list of reviews -top 3 most useful- => /top-reviews
//Botton create a new review==>> /review

app.get("/", (req, res) => {
  res.send("This is the API for trickyTreadmill.com! ");
});

app.get("/all-brands", (req, res) => {
    res.json(data.brands)
});

app.get("/top-brands", (req, res) => {
    const filteredBrands = data.brands.filter((brand) => brand.isTop);

    res.json(filteredBrands);
});

//  { 
//   brand_id: 7, // number 
//   model_id: 3,
//   title: "Startrac 800",
// }
// 7
app.get("/models/:brandId", (req, res) => {
  const brandId = req.params.brandId; // string
  const brandIdToNumber = Number(brandId);
  const filteredModels = data.models.filter((model) => model.brand_id === brandIdToNumber);

  res.json(filteredModels);

})

app.get("/reviews/:modelId", (req, res) => {
  const modelId = Number(req.params.modelId);
  const filteredReviews = data.reviews.filter((review) => review.model_id === modelId);
  res.json(filteredReviews);
})

module.exports = app;
