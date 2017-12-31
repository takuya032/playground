const PARTICIPANTS_CHANGE_COUNT = 'PARTICIPANTS_CHANGE_COUNT';
const ADD_PARTICIPANT = 'ADD_PARTICIPANT';
const REMOVE_PARTICIPANT = 'REMOVE_PARTICIPANT';
const CHNGE_PARTCIPANT = 'CHNGE_PARTCIPANT';

export const participantsChangeCount = count => {
  return {
    type: PARTICIPANTS_CHANGE_COUNT,
    participantsCount: count
  }
}

export const addParticipant = participants => {
  return {
    type: ADD_PARTICIPANT,
    datas: participants
  }
}

export const removeParticipant = participants => {
  return {
    type: REMOVE_PARTICIPANT,
    datas: participants
  }
}

export const changeParticipant = participants => {
  return {
    type: CHNGE_PARTCIPANT,
    datas: participants
  }
}
