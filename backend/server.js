const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/hi", (req, res) => {
  res.json({ message: "Hi, This is new feature" });
});

// ฟีเจอร์ใหม่: คืนเวลาปัจจุบันและ timezone
app.get("/api/time", (req, res) => {
  const now = new Date();
  const pad = (n) => n.toString().padStart(2, "0");
  const timeString = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(
    now.getSeconds()
  )}`;
  const dateString = `${pad(now.getDate())}/${pad(
    now.getMonth() + 1
  )}/${now.getFullYear()}`;
  res.json({
    timestamp: now.getTime(),
    iso: now.toISOString(),
    time: timeString,
    date: dateString,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  });
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
