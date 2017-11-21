const passport = require('passport');
const mongoose = require("mongoose");
const User = mongoose.model("user");.

passport.use(User.createStrategy());

passport.serializedUser(User.serializedUser());
passport.deserializedUser(User.deserializedUser());