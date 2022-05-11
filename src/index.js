const express = require("express");
const bodyParser = require("body-parser");

const moviesRouter = require("./routes/movies");
const reviewsRouter = require("./routes/reviews");

const app = express();
app.use(bodyParser.json());

app.use("/api/movies", moviesRouter);
app.use("/api/review", reviewsRouter);

app.use((req, res, next) => {
  res.statusCode = 404;
  res.send();
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT} ⭐️`)
);
