const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

app.use(express.json());

const userRoutes = require("./Routes/User");
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("✅ Session 10 Backend is Working!");
});

mongoose.connect("mongodb+srv://Sowmyasree:abcdefg@cluster0.ngl2agv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
