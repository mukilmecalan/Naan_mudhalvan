const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mukiljim", 
  database: "employee",
  port: 3306
});

db.getConnection((err) => {
  if (err) {
    console.log("❌ DB connection failed");
  } else {
    console.log("✅ Connected to MySQL database");
  }
});


app.listen(8080, () => {
  console.log("🚀 Server running on http://localhost:8080");
});

app.get('/', (req, res) => {
  res.send('✅ Session 9 Backend is running!');
});


app.get("/employees", (req, res) => {
  const query = "SELECT * FROM emp";
  db.query(query, (err, result) => {
    if (err) return res.status(500).send("Database error");
    res.json(result);
  });
});

app.post("/employee", (req, res) => {
  const { empno } = req.body;
  const query = "SELECT * FROM emp WHERE empno = ?";
  db.query(query, [empno], (err, result) => {
    if (err) return res.status(500).send("Query failed");
    if (result.length === 0) return res.status(404).send("Employee not found");
    res.json(result[0]);
  });
});

app.post("/add", (req, res) => {
  const { empid, ename, job } = req.body;
  const query = "INSERT INTO emp (empno, ename, job) VALUES (?, ?, ?)";
  db.query(query, [empid, ename, job], (err, result) => {
    if (err) return res.status(500).send("Insert failed");
    res.send("✅ Employee added successfully");
  });
});
