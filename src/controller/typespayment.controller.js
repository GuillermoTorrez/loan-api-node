import TypesPayment from "../models/TypesPayment";

export const createTypespayment = (req, res) => {
  const { body } = req;
  const { description, interest_rate } = body;

  const newType = new TypesPayment({
    description: description,
    interest_rate: interest_rate,
  });
  newType
    .save()
    .then((type) => res.json(type))
    .catch((err) => res.status(400).json({ error: err }));
};

export const getTypespayments = async (req, res) => {
  await TypesPayment.find({})
    .then((status) => res.json(status))
    .catch((err) => res.status(400).json({ error: err }));
};
