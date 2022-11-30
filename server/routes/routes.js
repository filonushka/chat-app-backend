const router = require("express").Router();
const Controller = require("../controllers/Controller.js");
const User = require("../models/User");
const Message = require("../models/Message");

require("../controllers/Controller.js");

// create user
router.post("/user", Controller.createUser);

//get user
router.get("/user/:id", Controller.getMe);

//get all users
router.get("/users", Controller.getAllUsers);

//create message
router.post("/user/message", Controller.createMessage);

// CHANGE
//get message
router.get("/messages/:id", Controller.getOneMessage);

//get  all messages
router.get("/messages", Controller.getAllMessages);

module.exports = router;
