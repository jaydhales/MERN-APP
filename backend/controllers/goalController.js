const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// @desc    Set Goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    throw new Error();
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.status(200).json(goal);
});

// @desc    Update Goal
// @route   PUT /api/goals
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error('Goal not Found');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedGoal);
});

// @desc    Delete Goal
// @route   DELETE /api/goals
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error('Goal not Found');
  }

  const deletedGoal = await goal.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
