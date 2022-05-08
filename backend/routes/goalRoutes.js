const express = require('express');
const {
  updateGoal,
  deleteGoal,
  getGoals,
  setGoals,
} = require('../controllers/goalController');

const router = express.Router();

router.route('/').get(getGoals).post(setGoals);

router.route('/:id').put(updateGoal).delete(deleteGoal);

module.exports = router;

