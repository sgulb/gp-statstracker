const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Players collection and inserts the Players below use 'yarn seed to populate'

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/gradeTrack",
  {
    useMongoClient: true
  }
);

const PlayerSeed = [
  {
    fName: "Player1",
    lName: "P1LastN",
    jersey:"22",
    playerImage:"http://res.cloudinary.com/brooklee/image/upload/v1510618076/playerplaceholder_f9khi0.jpg"
  },
    {
        fName: "Player2",
        lName: "P2LastN",
        jersey:"23",
        playerImage:"http://res.cloudinary.com/brooklee/image/upload/v1510618076/playerplaceholder_f9khi0.jpg"
    },


];

db.Player
  .remove({})
  .then(() => db.Player.collection.insertMany(PlayerSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });