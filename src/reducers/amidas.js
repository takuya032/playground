const OPEN_AMIDA = "OPEN_AMIDA";

const initState = {
  isOpen: false,
}

const reducers = (state = initState, action) => {
  switch (action.type) {
  case OPEN_AMIDA: {
    return Object.assign(
      {},
      state,
      {
        isOpen: action.isOpen
      }
    );
  }
  default:
    return state
  }
}

export default reducers;
