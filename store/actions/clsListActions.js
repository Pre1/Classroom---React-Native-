import axios from "axios";
import * as actionTypes from "./types";

import { setErrors } from "./errorsAction";

const instance = axios.create({ baseURL: "http://127.0.0.1:8000/api/" });

export const getAllClasses = () => {
  return async dispatch => {
    dispatch(setClassesLoading());
    try {
      const res = await instance.get("classrooms/list/");
      const classes = res.data;
      dispatch({
        type: actionTypes.GET_ALL_CLASSROOMS,
        payload: classes
      });
    } catch (err) {
      console.error("Error while fetching classes", err);
    }
  };
};

export const setClassesLoading = () => ({
  type: actionTypes.CLASSES_LOADING
});

export const createClass = (data, nav) => {
  return async dispatch => {
    try {
      const res = await instance.post("classrooms/create/", data);
      const classes = res.data;
      dispatch({
        type: actionTypes.CREATE_CLASSROOM,
        payload: classes
      });

      nav.replace("ListClassroom");
    } catch (err) {
      dispatch(setErrors(err));
      console.error("Error while fetching classes", err);
    }
  };
};
