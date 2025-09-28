const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 5000;

// enable CORS so frontend can connect
app.use(cors());

// connect to SQLite database (creates file if not exists)
const db = new sqlite3.Database("./quiz.db");

// create table if not exists
db.run(`CREATE TABLE IF NOT EXISTS questions (
  sno INTEGER PRIMARY KEY,
  question TEXT,
  option1 TEXT,
  option2 TEXT,
  option3 TEXT,
  option4 TEXT,
  answer TEXT
)`);

// sample route: fetch all questions
app.get("/questions", (req, res) => {
  db.all("SELECT * FROM questions", [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

// fetch single question by sno
app.get("/questions/:sno", (req, res) => {
  const { sno } = req.params;
  db.get("SELECT * FROM questions WHERE sno = ?", [sno], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(row);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});







// ✅ Route to see schema
app.get("/schema", (req, res) => {
  db.all("PRAGMA table_info(questions);", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});