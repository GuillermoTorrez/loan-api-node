import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const loanSchema = new Schema(
  {
    customer_id: {
      type: Schema.Types.ObjectId,
      ref: "Customers",
    },
    date: Date,
    amount: Number,
    interest: Number,
    term: Number,
    firstday_payment: Date,
    status_aproval: Boolean,
    credit_score: Number,
    frequency_payment: {
      type: Schema.Types.ObjectId,
      ref: "Frequencies",
    },
    userid: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    types_payment: {
      type: Schema.Types.ObjectId,
      ref: "TypesPayments",
    },
  },
  { timestamps: true, versionKey: false }
);

loanSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

loanSchema.plugin(uniqueValidator);

export default model("Loans", loanSchema);
