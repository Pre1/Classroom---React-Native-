import axios from "axios";
import * as actionTypes from "./types";
import { setErrors } from "./errorsAction";
import { getAllClasses } from "./clsListActions";

const instance = axios.create({ baseURL: "http://127.0.0.1:8000/api/" });

export const getClass = (clsID, navigation) => {
  return async dispatch => {
    try {
      const res = await instance.get(`classrooms/detail/${clsID}/`);
      const classInfo = res.data;
      const students = classInfo.students;
      console.log("TCL: getClass -> students", students);

      dispatch({
        type: actionTypes.GET_CLASSROOM,
        payload: classInfo
      });

      dispatch({
        type: actionTypes.GET_STUDENTS,
        payload: students
      });

      navigation.navigate("Detail");
    } catch (err) {
      dispatch(setErrors(err));

      console.error("Error while fetching classes", err);
    }
  };
};

export const updateClass = (cls, clsID, navigation) => {
  console.log("TCL: updateClass -> clsID", clsID);
  console.log("TCL: updateClass -> cls", cls);
  return async dispatch => {
    try {
      const res = await instance.put(`classrooms/update/${clsID}/`, cls);
      const classUpdated = res.data;
      dispatch({
        type: actionTypes.UPDATE_CLASSROOM,
        payload: classUpdated
      });

      dispatch(getClass(clsID, navigation));
    } catch (err) {
      dispatch(setErrors(err));
      console.error("Error while fetching classes", err);
    }
  };
};

export const deleteClass = clsID => {
  return async dispatch => {
    try {
      const res = await instance.delete(`classrooms/delete/${clsID}/`);
      dispatch({
        type: actionTypes.DELETE_CLASSROOM
      });
      navigation.replace("ListClassroom");
    } catch (err) {
      dispatch(setErrors(err));
      console.error("Error while fetching classes", err);
    }
  };
};
