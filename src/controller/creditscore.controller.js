

export const getCreditScore = async (req, res) => {
  const min = Math.ceil(559);
  const max = Math.floor(830);
  const credit_score = Math.floor(Math.random() * (max - min + 1) + min)
  res.json(credit_score);
};
