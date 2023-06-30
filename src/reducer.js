export const initialState = {
  term: null,
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

//state is the state of the data layer and
//action is whatever we are dispatching to the context API
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };

    default:
      return state;
  }
};

export default reducer;
