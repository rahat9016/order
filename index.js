const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const OrderRouter = require("./src/Routes/Order");
// connect with database
const mongoose = require("mongoose");
mongoose
  .connect(process.env.API, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Data base connected");
  })
  .catch((error) => {
    console.log("Data base Error ---->", error);
  });
// Middleware
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

// Route Handler
app.use("/api", OrderRouter);

app.listen(process.env.PORT, () => {
  console.log(` App listening on port ${process.env.PORT}`);
});
