import { Schema, model } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const CitiesSchema = new Schema(
  {
    id_cities: {
      type: Number,
      unique: true,
    },
    city: {
      type: String,
      unique: true,
    },
    city_ascii: {
      type: String,
      unique: true,
    },
    province_id: {
      type: String,
      unique: true,
    },
    province_name: {
      type: String,
    },
    time_zone: {
      type: String,
    },
    postal: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

CitiesSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

CitiesSchema.plugin(uniqueValidator);
const Cities = model("Cities", CitiesSchema);
module.exports = Cities;
