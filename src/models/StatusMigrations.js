import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const StatusMSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true, versionKey: false }
);

StatusMSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

StatusMSchema.plugin(uniqueValidator);
const Roles = model("Status", StatusMSchema);
module.exports = Roles;
