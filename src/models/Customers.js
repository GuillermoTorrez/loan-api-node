import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const customerSchema = new Schema(
  {
    sin: { type: Number, required: true, unique: true, maxlength: 9 },
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    phone_number: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    gender: { type: String, required: true, trim: true },
    maritalstatus: { type: String, required: true, trim: true },
    birth_date: Date,
    salary_month: Number,
    address: {
      address1: { type: String, required: true, trim: true },
      address2: { type: String, required: false, trim: true },
      city: { type: String, required: true, trim: true },
      province: { type: String, required: true, trim: true },
      postal_code: { type: String, required: true, trim: true, maxlength: 7 },
      //city_id: {
      //  type: Schema.Types.ObjectId,
      //  ref: "Cities",
      //},
    },
    photourl: { type: String },
    status_migration_id: { type: Schema.Types.ObjectId, ref: "Status" },
    score: { type: Number, required: true },
    bank_name: { type: String, required: true, trim: true },
    bank_account: Number,
    bank_route: Number,
    bank_branch: Number,
    userid: {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true, versionKey: false }
);

customerSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

customerSchema.plugin(uniqueValidator);
export default model("Customers", customerSchema);
