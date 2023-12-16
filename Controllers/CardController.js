// controllers/cardController.js
const Card = require("../Models/CardModel");

const cardController = {
  getAllCards: async (req, res) => {
    try {
      const cards = await Card.find({ userId: req.params.userId });
      res.status(200).json(cards);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // controllers/cardController.js

  addCard: async (req, res) => {
    try {
      const { title, description, userId } = req.body;
      const newCard = new Card({ title, description, userId });
      await newCard.save();
      return res.status(201).json(newCard);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateCard: async (req, res) => {
    try {
      const { title, description } = req.body;
      const updatedCard = await Card.findByIdAndUpdate(
        req.params.id,
        { title, description },
        { new: true }
      );
      res.status(200).json(updatedCard);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteCard: async (req, res) => {
    try {
      await Card.findByIdAndRemove(req.params.id);
      res.status(204).json(); // 204 No Content
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = cardController;
