// routes/cardRoutes.js
const express = require("express");
const cardController = require("../Controllers/CardController");

const router = express.Router();

router.get("/:userId", cardController.getAllCards);
router.post("/", cardController.addCard);
router.put("/:id", cardController.updateCard);
router.delete("/:id", cardController.deleteCard);

module.exports = router;
