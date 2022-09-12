import Frequency from "../models/Frequencies";

export const createFrequency = (req, res) => {
  const { body } = req;
  const { description } = body;

  console.log(description);
  const newFrequency = new Frequency({
    description: description,
  });
  newFrequency
    .save()
    .then((frequency) => res.json(frequency))
    .catch((err) => res.status(400).json({ error: err }));
};

export const getFrequencies = async (req, res) => {
  await Frequency.find({})
    .then((status) => res.json(status))
    .catch((err) => res.status(400).json({ error: err }));
};
