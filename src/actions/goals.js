const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';
const OPEN_GOAL = 'OPEN_GOAL';

export const addGoal = goals => {
  return {
    type: ADD_GOAL,
    datas: goals,
  }
};

export const removeGoal = goals => {
  return {
    type: REMOVE_GOAL,
    datas: goals,
  }
};

export const openGoal = goals => {
  return {
    type: OPEN_GOAL,
    datas: goals,
  }
};
