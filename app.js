require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
const routes = require("./routes/index");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, () => {
  console.log(`i love you ${PORT}`);
});
