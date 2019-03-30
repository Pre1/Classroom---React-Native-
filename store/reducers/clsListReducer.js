import * as actionTypes from "../actions/types";

const initialState = {
  classes: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_CLASSROOMS:
      return {
        ...state,
        classes: action.payload,
        loading: false
      };
    case actionTypes.CLASSES_LOADING:
      return {
        ...state,
        loading: true
      };

    case actionTypes.CREATE_CLASSROOM:
      return {
        ...state,
        classes: [...state.classes, action.payload]
      };
    default:
      return state;
  }
};

export default reducer;
