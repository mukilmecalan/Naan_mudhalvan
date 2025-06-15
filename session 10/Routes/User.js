const express = require("express");
const router = express.Router();
const User = require("../Schema/User");

router.post("/create", async (req, res) => {
  const { name, email, password, phone } = req.body;
  try {
    const newUser = new User({ name, email, password, phone });
    await newUser.save();
    res.status(201).json({ message: "✅ User created", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "❌ Error creating user", error });
  }
});

module.exports = router;
