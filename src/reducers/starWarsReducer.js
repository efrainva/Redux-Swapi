import /* we need our action types here*/{
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE} from "../actions";
const initialState = {
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_DATA_START: return {
      ...state,
      error: '',
      isLoading: true,
      

    }
    case FETCH_DATA_SUCCESS: return {
      ...state,
      error: '',
      isLoading: false,
      

    }
    case FETCH_DATA_FAILURE: return {
      ...state,
      error: '',
      isLoading: false,
      

    }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
