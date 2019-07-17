const initialState = {
  value: 0, accountID: ''
};

function addReducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1};
    case 'DECREASE':
      return { ...state, value: state.value - 1};
    case 'ACCOUNT_ID':
      return { ...state, accountID: 'account update2' };
    default:
      return state;
  }
}

export default addReducer;
