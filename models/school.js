const mongoose = require("mongoose");
      Schema   = mongoose.Schema;

const schoolSchema = new Schema({
  schoolName: { type: String, required: "Please provide the Schools name", trim: true  },
  timestamp: { type: Date, default: Date.now },
  team: { type: Schema.Types.ObjectId, ref: "Team"}
});

const School = mongoose.model("School", schoolSchema);

module.exports = School;