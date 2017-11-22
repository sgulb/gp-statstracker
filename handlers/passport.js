const passport = require('passport');
const mongoose = require("mongoose");
const db = require("../models");

passport.use(db.Users.createStrategy());

passport.serializeUser(db.Users.serializeUser());
passport.deserializeUser(db.Users.deserializeUser());