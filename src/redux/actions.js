export const fetchMessages = () => async (dispatch, getState) => {
    const page = getState().page;
    const response = await fetch(
      `https://gorest.co.in/public/v1/users?page=${page}`
    );
    const data = await response.json();
    dispatch({
      type: 'FETCH_MESSAGES',
      payload: data.data,
    });
  };
  
  export const sendMessage = (name) => ({
    type: 'SEND_MESSAGE',
    payload: { id: Date.now(), name },
  });
  