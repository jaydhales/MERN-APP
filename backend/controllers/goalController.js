const asyncHandler = require('express-async-handler');

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get goals' });
});

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    throw new Error();
  }
  res.status(200).json({ message: 'Set goals' });
});

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal at ${req.params.id}` });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal at ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
};
