import Status from "../models/StatusMigrations.js";

export const createNewStatusMigrations = (req, res) => {
  const newStatus = new Status({
    name: req.body.name,
  });
  newStatus
    .save()
    .then((status) => res.json(status))
    .catch((err) => res.status(400).json({ error: err }));
};

export const getStatusMigrations = async (req, res) => {
  await Status.find({}, { id: 1, name: 1 })
    .sort({ name: 1, id: 1 })
    .then((status) => res.json(status))
    .catch((err) => res.status(400).json({ error: err }));
};
