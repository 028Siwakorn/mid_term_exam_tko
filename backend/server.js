const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World from server" });
});

// Endpoint สำหรับตรวจสอบ environment
app.get("/api/env", (req, res) => {
  res.json({
    node_env: process.env.NODE_ENV || "development",
    port: PORT,
    platform: process.platform,
    time: new Date().toISOString(),
  });
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
