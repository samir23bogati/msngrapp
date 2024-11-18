const initialState = {
    messages: [],
    page: 1,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_MESSAGES':
        return {
          ...state,
          messages: [...action.payload, ...state.messages],
          page: state.page + 1,
        };
      case 'SEND_MESSAGE':
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  