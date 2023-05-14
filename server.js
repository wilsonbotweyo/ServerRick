const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/characters', async (req, res) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    res.json(response.data);
  } catch (error) {
    res.json({ error: error.toString() });
  }
});

app.get('/api/locations', async (req, res) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/location');
    res.json(response.data);
  } catch (error) {
    res.json({ error: error.toString() });
  }
});

app.get('/api/episodes', async (req, res) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/episode');
    res.json(response.data);
  } catch (error) {
    res.json({ error: error.toString() });
  }
});

app.get('/api/singleCharacter', async (req, res) => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character/1');
    res.json(response.data);
  } catch (error) {
    res.json({ error: error.toString() });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
