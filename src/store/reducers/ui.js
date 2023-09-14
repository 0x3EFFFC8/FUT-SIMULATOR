const INICIAL_STATE = {
  openLogin: false,
};

const uiReducer = (state = INICIAL_STATE,action) => {
  switch (action.type) {
    case 'OPEN_LOGIN':
      return {
        ...state,
        openLogin: true,
      }
    case 'CLOSE_LOGIN':
      return {
        ...state,
        openLogin: false,
      }
    default:
      return state;
  }
};

export default uiReducer;
