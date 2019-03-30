import * as actionTypes from "../actions/types";

const initialState = {
  students: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STUDENTS:
      return {
        ...state,
        students: action.payload
      };

    case actionTypes.CREATE_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload]
      };

    case actionTypes.UPDATE_STUDENT:
      return {
        ...state,
        students: action.payload
      };

    case actionTypes.DELETE_STUDENT:
      let remStu = state.students.filter(elm => elm.id !== action.payload);
      return {
        ...state,
        students: remStu
      };
    default:
      return state;
  }
};

export default reducer;
