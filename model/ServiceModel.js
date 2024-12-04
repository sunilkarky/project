const mongoose = require("mongoose");
const schema = mongoose.Schema;

//service Model

const serviceSchema = new schema(
  {
    serviceName: {
      type: String,
      required: [true, "service Name is required"],
    },
    serviceDescription: {
      type: String,
      required: [true, " service Description is required"],
    },
    requiredDocuments: {
      type: String,
    },
    office: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "office",
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("service", serviceSchema);
module.exports = Service;
