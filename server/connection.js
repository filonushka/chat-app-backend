const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB is OK");
  })
  .catch((err) => console.log("DB error", err));
