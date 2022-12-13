import Cities from "../models/Cities.js";

export const getCities = (req, res) => {
  const { city } = req.params;
  const { province_id } = req.params;

  //console.log(city);
  //console.log(province_id);

  Cities.find({
    $and: [
      { city: { $regex: city, $options: "i" } },
      { province_id: { $regex: province_id, $options: "i" } },
    ],
  })
    .then((cities) => {
      if (cities) {
        return res.json(cities);
      } else {
        res.json({}).status(404).end();
      }
    })
    .catch((err) => {
      console.log(err);
      res.json({}).status(400).end();
    });
};

export const getAllCities = (req, res) => {
  Cities.find({})
    .then((cities) => {
      if (cities) {
        return res.json(cities);
      } else {
        res.json({}).status(404).end();
      }
    })
    .catch((err) => {
      console.log(err);
      res.json({}).status(400).end();
    });
};


