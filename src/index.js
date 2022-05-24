const express = require("express");
const bodyParser = require("body-parser");

const connectMongo = require("./utils/mongoclient").connectMongo;

const moviesRouter = require("./routes/movies");
const reviewsRouter = require("./routes/reviews");
const genresRouter = require("./routes/genres");

const app = express();
app.use(bodyParser.json());

app.use("/api/movies", moviesRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api/genres", genresRouter);

app.use((req, res, next) => {
  res.statusCode = 404;
  res.send();
});

const PORT = process.env.PORT || 3000;

const main = async () => {
  try {
    await connectMongo();
    app.listen(PORT, () =>
      console.log(`🚀 Server ready at: http://localhost:${PORT} ⭐️`)
    );
  } catch (error) {
    throw error;
  }
};

main();
