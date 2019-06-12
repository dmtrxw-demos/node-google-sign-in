if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const express = require('express');
const cors = require('cors');

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/tokensignin', function(req, res, next) {
  client
    .verifyIdToken({
      idToken: req.body.idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    })
    .then(function(ticket) {
      // Get user information from Google
      const { email, name, picture } = ticket.getPayload();

      // Generate jsonwebtoken for requesting your own endpoints/routes
      const accessToken = jwt.sign({ email }, process.env.JWT_SECRET);

      /**
       * TODO
       * - Generate a random password for user
       * - Save user to database (if not registered yet)
       */

      res.status(200).json({ email, name, picture, accessToken });
    })
    .catch(next);
});

app.use(function(err, req, res, next) {
  console.log(err);
  res.status(500).json({
    message: 'Internal server error',
  });
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
