const mongoose = require("mongoose");
      Schema   = mongoose.Schema;

const schoolSchema = new Schema({

  // Name of School, Required
  schoolName: { type: String, required: "Please provide the Schools name", trim: true  },
  
  // Time of last update (update to Array to show update history)
  timestamp: { type: Date, default: Date.now },

  // teams linked to this School
  team: [{ type: Schema.Types.ObjectId, ref: "Team"}]
});

const School = mongoose.model("School", schoolSchema);

module.exports = School;