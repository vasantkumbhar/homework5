var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy
  , GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

  passport.use(new FacebookStrategy({
    clientID: config.FACEBOOK_APP_ID, // need to be created
    clientSecret: config.FACEBOOK_APP_SECRET, // need to be created
    callbackURL: "http://localhost:8000/api/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      // accessToken, refreshToken, profile - need to be created
    if(token === config.token) {
        done(null, {username: config.username, password: config.password})
    } else {
        done(err);
    }
  }
));

passport.use(new GoogleStrategy({
    consumerKey: config.GOOGLE_CONSUMER_KEY,
    consumerSecret: config.GOOGLE_CONSUMER_SECRET,
    callbackURL: "http://localhost:8000/auth/google/callback"
  },
  function(token, tokenSecret, profile, done) {
    if(token === config.token) {
        done(null, {username: config.username, password: config.password})
    } else {
        done(err);
    }
  }
));