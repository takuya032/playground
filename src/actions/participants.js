const PARTICIPANTS_CHANGE_COUNT = 'PARTICIPANTS_CHANGE_COUNT';

export const participantsChangeCount = count => {
  return {
    type: PARTICIPANTS_CHANGE_COUNT,
    participantsCount: count
  }
}
