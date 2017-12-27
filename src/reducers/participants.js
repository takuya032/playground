const PARTICIPANTS_CHANGE_COUNT = 'PARTICIPANTS_CHANGE_COUNT';

const initState = {
  participantsCount: 5,
  datas: [],
  target: {
    name: '',
  },
}

const reducers = (state = initState, action) => {
  switch (action.type) {
  case PARTICIPANTS_CHANGE_COUNT: {
    return Object.assign(
      {},
      state,
      {
        participantsCount: action.participantsCount,
      }
    )
  }
  default: 
    return state
  }
}

export default reducers
