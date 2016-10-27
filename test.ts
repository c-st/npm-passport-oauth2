/// <reference path="bundle.d.ts" />

import OAuth2Strategy = require('passport-oauth2');

new OAuth2Strategy(
  {
    authorizationURL: 'https://www.example.com/oauth2/authorize',
    tokenURL: 'https://www.example.com/oauth2/token',
    clientID: 'abc',
    clientSecret: '123',
    callbackURL: 'http://localhost:3000/auth/example/callback'
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, {});
  }
);
