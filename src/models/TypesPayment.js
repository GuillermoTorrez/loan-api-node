import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const TypespaymentSchema = new Schema(
  {
    description: {
      type: String,
      unique: true,
    },
    interest_rate: {
      type: Number,
      unique: true,
    },
  },
  { timestamps: true, versionKey: false }
);

TypespaymentSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

TypespaymentSchema.plugin(uniqueValidator);
const TypesPayment = model("TypesPayment", TypespaymentSchema);
module.exports = TypesPayment;
