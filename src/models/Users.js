import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    name: String,
    phone_number: String,
    email: String,
    role: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Roles',
      },
    ],
    passwordHash: String,
  },
  { timestamps: true, versionKey: false }
);

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

userSchema.plugin(uniqueValidator);
const User = model("User", userSchema);
module.exports = User;
