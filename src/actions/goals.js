const ADD_GOAL = 'ADD_GOAL';

export const addGoal = goals => {
  return {
    type: ADD_GOAL,
    datas: goals,
  }
}
