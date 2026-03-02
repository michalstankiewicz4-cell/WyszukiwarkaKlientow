const express = require('express');
const cors    = require('cors');
const Parser  = require('rss-parser');
const path    = require('path');

const app    = express();
const parser = new Parser();

app.use(cors({
  origin: (origin, cb) => cb(null, true) // zezwól na każdy origin (localhost:8081, produkcja)
}));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// ──────────────────────────────────────────────
// RSS proxy — pobiera feed po stronie serwera
// GET /api/rss?url=<encoded_rss_url>
// ──────────────────────────────────────────────
app.get('/api/rss', async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'Brak parametru url' });

  try {
    const feed = await parser.parseURL(url);
    const items = (feed.items || []).slice(0, 20).map(item => ({
      title:       item.title        || '',
      link:        item.link         || item.guid || '',
      description: item.contentSnippet || item.content || item.summary || '',
      pubDate:     item.isoDate      || item.pubDate || '',
      feedTitle:   feed.title        || '',
    }));
    res.json({ ok: true, items });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Błąd pobierania RSS' });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`KlientHunter serwer działa na http://localhost:${PORT}`);
});
