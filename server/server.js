const express = require("express");
const app = express();
const User = require("./models/User");
const router = require("./routes/routes");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/api", router);

require("./connection");

const server = require("http").createServer(app);
const PORT = 5001;
const io = require("socket.io")(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
  },
});

server.listen(PORT, () => {
  console.log("Server is OK, port", PORT);
});

async function getLastMessages(members) {
  let messages = await Message.aggregate([
    { $match: { to: members } },
    { $group: { _id: "$date", messagesByDate: { $push: "$ROOT" } } },
  ]);
  return messages;
}

function sortMessagesByDate(messages) {
  return messages.sort(function (a, b) {
    let date1 = a._id.split("/");
    let date2 = b._id.split("/");

    date1 = date1[2] + date1[0] + date1[1];
    date2 = date2[2] + date2[0] + date2[1];

    return date1 < date2 ? -1 : 1;
  });
}

io.on("connection", (socket) => {
  console.log("connected");
});
