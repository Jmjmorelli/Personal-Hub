const express = require('express');
const axios = require('axios');
const cors = require('cors');

require('dotenv').config();


const app = express();
app.use(cors());
const port = 8888;




// SPOTIFY STUFF // 

// FOR SAVING TOKENS 

const fs = require('fs');
const path = require('path');

let access_token = '';
let refresh_token = '';

function tryLoadRefreshTokenAndRefresh() {
  const filePath = path.join(__dirname, 'tokens.json');
  if (fs.existsSync(filePath)) {
    const saved = JSON.parse(fs.readFileSync(filePath));
    refresh_token = saved.refresh_token;
    refreshAccessToken();
  }
}

async function refreshAccessToken() {
  try {
    const response = await axios.post('https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refresh_token,
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET
      }).toString(),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

    access_token = response.data.access_token;
    console.log('🔄 Access token refreshed'); // shout out 4o
  } catch (err) {
    console.error('Failed to refresh access token:', err.response?.data || err.message);
  }
}

// only used one time.
app.get('/api/sy/login', (req, res) => {
    
  const scope = 'user-read-currently-playing user-read-playback-state';
  const redirect = `https://accounts.spotify.com/authorize?response_type=code&client_id=${process.env.SPOTIFY_CLIENT_ID}&scope=${encodeURIComponent(scope)}&redirect_uri=${encodeURIComponent(process.env.REDIRECT_URI)}`;
  res.redirect(redirect);
});


app.get('/api/sy/callback', async (req, res) => {
  const code = req.query.code || null;

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token',
      new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.REDIRECT_URI,
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET
      }).toString(),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      });

    access_token = response.data.access_token;
    refresh_token = response.data.refresh_token;

    // Save refresh token to file
    fs.writeFileSync(path.join(__dirname, 'tokens.json'), JSON.stringify({ refresh_token }));

    res.send('Login success! Refresh token saved.');
  } catch (err) {
    console.error('Error during token exchange:', err.response?.data || err.message);
    res.status(500).send('Token exchange failed.');
  }
});


app.get('/api/sy/now-playing', async (req, res) => {
  if (!access_token) return res.status(403).send('Not logged in.');

  try {
    const result = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: { 'Authorization': `Bearer ${access_token}` }
    });

    if (result.status == 204 || !result.data || !result.data.item) {
      return res.status(204).send(); // nothing
    }

    res.json({
      song: result.data.item.name,
      artist: result.data.item.artists.map(a => a.name).join(', '),
      album: result.data.item.album.name,
      image: result.data.item.album.images[0].url
    });
    
  } catch (err) {
    res.status(500).send('Error fetching now playing.');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Server running at http://127.0.0.1:${port}`);
});

tryLoadRefreshTokenAndRefresh()