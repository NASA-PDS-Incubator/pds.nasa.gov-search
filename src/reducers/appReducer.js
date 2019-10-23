const initialState = {
  searchInput: '',
  isSearching: false,
  searchResults: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH_INPUT':
      return Object.assign({}, state, {
        searchInput: action.payload
      });

    case 'UPDATE_IS_SEARCHING':
      return Object.assign({}, state, {
          isSearching: action.payload
      });
    
    case 'RENDER_SEARCH_RESULTS':
      return Object.assign({}, state, {
        searchResults: action.payload
      });
    
    case 'RENDER_CONTEXT_SEARCH_RESULTS':
      return Object.assign({}, state, {
        searchContextResults: action.payload
      });
    
    default:
      return state;
  }
}