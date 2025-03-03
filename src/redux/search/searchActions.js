// Action Type
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";

// Action Creator for setting search query
export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});
