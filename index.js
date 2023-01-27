require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const port = process.env.PORT || 3000;

const app = express();

try {
  app.use(cors());
  app.use(routes);
  app.listen(port, () => console.log(`Server is running on ${port}`));
} catch (error) {
  console.log(error);
}
