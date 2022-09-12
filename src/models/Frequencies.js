import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const frequencySchema = new Schema(
  {
    description: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true, versionKey: false }
);

frequencySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

frequencySchema.plugin(uniqueValidator);
const Frequency = model("Frequency", frequencySchema);
module.exports = Frequency;
