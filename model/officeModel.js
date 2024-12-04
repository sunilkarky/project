const mongoose = require("mongoose");
const schema = mongoose.Schema;

//Office Model

const officeSchema = new schema(
  {
    officeName: {
      type: String,
      required: [true, "office Name is required"],
    },
    officeDescription: {
      type: String,
      required: [true, " office Description is required"],
    },
    services: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Office = mongoose.model("office", officeSchema);
module.exports = Office;
