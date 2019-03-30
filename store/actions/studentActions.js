import axios from "axios";
import * as actionTypes from "./types";
import { setErrors } from "./errorsAction";

const instance = axios.create({ baseURL: "http://127.0.0.1:8000/api/" });

export const createStudent = (data, navigation) => {
  //   console.log("TCL: createStudent -> data", data);

  return async dispatch => {
    try {
      const res = await instance.post("students/create/", data);
      //   console.log("TCL: createStudent -> res", res);
      const student = res.data;
      dispatch({
        type: actionTypes.CREATE_STUDENT,
        payload: student
      });
      navigation.replace("StudentList");
    } catch (err) {
      dispatch(setErrors(err));

      console.error("Error while fetching student", err);
    }
  };
};

export const updateStudent = (stu, stuID, navigation) => {
  return async dispatch => {
    try {
      const res = await instance.put(`students/update/${stuID}/`, stu);
      const student = res.data;
      dispatch({
        type: actionTypes.UPDATE_STUDENT,
        payload: student
      });
      navigation.navigate("Detail");
    } catch (err) {
      dispatch(setErrors(err));
      console.error("Error while fetching classes", err);
    }
  };
};

export const deleteStudent = stuID => {
  return async dispatch => {
    try {
      await instance.delete(`students/delete/${stuID}/`);
      dispatch({
        type: actionTypes.DELETE_STUDENT,
        payload: stuID
      });
    } catch (err) {
      dispatch(setErrors(err));
      console.error("Error while fetching classes", err);
    }
  };
};
