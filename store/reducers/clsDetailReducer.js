import * as actionTypes from "../actions/types";

const initialState = {
  cls: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CLASSROOM:
      return {
        ...state,
        cls: action.payload
      };

    case actionTypes.UPDATE_CLASSROOM:
      return {
        ...state,
        cls: action.payload
      };

    case actionTypes.DELETE_CLASSROOM:
      return {
        ...state,
        cls: {}
      };
    default:
      return state;
  }
};

export default reducer;
