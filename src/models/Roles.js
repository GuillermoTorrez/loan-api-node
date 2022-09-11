import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const RoleSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true, versionKey: false }
);

RoleSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

RoleSchema.plugin(uniqueValidator);
const Roles = model("Roles", RoleSchema);
module.exports = Roles;
