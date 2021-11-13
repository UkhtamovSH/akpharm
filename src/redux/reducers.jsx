const INITIAL_STATE = {
  partners: [],
}

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_PARTNERS':
      return {
        ...state,
        partners: action.payload
      }
    default:
      return state;
  }
}

export default reducers;