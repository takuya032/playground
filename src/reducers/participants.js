const PARTICIPANTS_CHANGE_COUNT = 'PARTICIPANTS_CHANGE_COUNT';
const ADD_PARTICIPANT = 'ADD_PARTICIPANT';
const REMOVE_PARTICIPANT = 'REMOVE_PARTICIPANT';
const CHNGE_PARTCIPANT = 'CHNGE_PARTCIPANT';

const initState = {
  participantsCount: 5,
  datas: [{name: '', goals: ''}, {name: '', goals: ''}, {name: '', goals: ''}, {name: '', goals: ''}, {name: '', goals: ''},],
  target: {
    name: '',
    goals: '',
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
  case ADD_PARTICIPANT: {
    return Object.assign(
      {},
      state,
      {
        datas: action.datas,
      }
    )
  }
  case REMOVE_PARTICIPANT: {
    return Object.assign(
      {},
      state,
      {
        datas: action.datas,
      }
    )
  }
  case CHNGE_PARTCIPANT: {
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
