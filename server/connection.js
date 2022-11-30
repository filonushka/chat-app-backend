const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.zubpkej.mongodb.net/chat-app?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB is OK");
  })
  .catch((err) => console.log("DB error", err));
