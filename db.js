// db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Make sure this matches the real database file path you're inspecting
const dbPath = path.join(__dirname, 'soundScout.db');
console.log("📁 Using database at:", dbPath);

const db = new sqlite3.Database(path.join(__dirname, 'soundScout.db'));

// Create table if not exists
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS search_history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      artist_name TEXT NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

module.exports = db;
