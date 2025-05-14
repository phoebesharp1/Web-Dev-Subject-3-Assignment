console.log("🎉 THIS IS THE REAL SERVER FILE 🎉");

const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

console.log("ACTUALLY RUNNING THIS server.js FILE:", __filename);

// Enable CORS
app.use(cors({
  origin: ['http://127.0.0.1:5500', 'http://localhost:5500'],
  methods: ['GET', 'POST'],
}));


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//  Request logger
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

// API Routes
app.get('/test-route', (req, res) => {
  res.send('Test route works!');
});

app.post('/search', (req, res) => {
  const searchTerm = req.body.search;
  console.log("🔎 Received search term:", searchTerm);

  const stmt = db.prepare('INSERT INTO search_history (artist_name) VALUES (?)');
  stmt.run(searchTerm, function (err) {
    if (err) {
      console.error("Failed to save search:", err);
    } else {
      console.log("✅ Successfully saved search:", searchTerm);
    }
    res.redirect('/explore.html');
  });
});

app.post('/api/save-search', (req, res) => {
  const artist = req.body.artist;
  console.log("Saving search:", artist);

  if (!artist) {
    console.error(" No artist received in body!");
    return res.status(400).json({ error: "No artist provided" });
  }

  const stmt = db.prepare('INSERT INTO search_history (artist_name) VALUES (?)');
  stmt.run(artist, function (err) {
    if (err) {
      console.error("Failed to save search:", err.message);
      return res.status(500).json({ error: 'Failed to save search' });
    }
    console.log(" Successfully saved artist:", artist);
    res.json({ success: true });
  });
});

app.get('/api/search-history', (req, res) => {
  db.all('SELECT * FROM search_history ORDER BY timestamp DESC', [], (err, rows) => {
    if (err) {
      console.error("Failed to fetch history:", err);
      return res.status(500).json({ error: 'Failed to fetch history' });
    }
    res.json(rows);
  });
});

//  HTML Route
app.get('/history', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/history.html'));
});

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

