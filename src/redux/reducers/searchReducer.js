import { SET_SEARCH_QUERY } from "../search/searchActions";

// Initial State
const initialState = {
  query: "",
};

// Search Reducer
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;



