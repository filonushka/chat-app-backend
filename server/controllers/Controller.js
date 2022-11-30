require("../models/User.js");
const User = require("../models/User");
const Message = require("../models/Message");

class Controller {
  async createUser(req, res) {
    try {
      const { name } = req.body;
      const user = await User.create({ name });
      user.status = "online";
      await user.save();
      res.status(200).json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Failed",
      });
    }
  }

  async createMessage(req, res) {
    try {
      const { socketid, ...messageData } = req.body;
      const message = await Message.create({ ...messageData });
      console.log(message);
      res.status(200).json(message);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Failed to load the message",
      });
    }
  }

  async getMe(req, res) {
    try {
      const userId = req.params.id;
      console.log(req.params);
      if (!userId) {
        res.status(400).json({ message: "Couldn't find the id" });
      }
      const message = await User.findById(userId);
      return res.json(message);
    } catch (err) {
      console.log(err);
      res.status(500).json(e);
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(e);
    }
  }

  async getOneMessage(req, res) {
    try {
      const messageId = req.params.id;
      console.log(messageId);
      if (!messageId) {
        res.status(400).json({ message: "Couldn't find the message" });
      }
      const message = await Message.findById(messageId);
      return res.json(message);
    } catch (err) {
      console.log(err);
      res.status(500).json(e);
    }
  }

  async getAllMessages(req, res) {
    try {
      const messages = await Message.find();
      return res.json(messages);
    } catch (err) {
      console.log(err);
      res.status(500).json(e);
    }
  }
}

module.exports = new Controller();
