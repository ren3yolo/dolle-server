require("dotenv").config();

const express = require("express");
const routes = require("./routes");

const port = process.env.PORT || 3000;

const app = express();

try {
  app.use(routes);

  app.listen(port, () => console.log(`Server is running on ${port}`));
} catch (error) {
  console.log(error);
}
