const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

const initState = {
  goalsCount: 5,
  datas: [],
  target: {
    name: '',
    postion: '',
  },
};

const reducers = (state = initState, action) => {
  switch (action.type) {
  case ADD_GOAL: {
    return Object.assign(
      {},
      state,
      {
        datas: action.datas,
      }
    )
  }
  case REMOVE_GOAL: {
    return Object.assign(
      {},
      state,
      {
        datas: action.datas,
      }
    )
  }
  default:
    return state
  }
}

export default reducers
