const express = require("express");

// const reviewController = require("../controllers/reviews");
// reviewController.createReview
const { createReview } = require("../controllers/reviews"); // const createReview  = require("../controllers/reviews").createReview;

const router = express.Router();

router.post("/", createReview);

module.exports = router;
