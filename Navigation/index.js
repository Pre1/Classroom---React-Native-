import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "../Components/Login";
import List from "../Components/ListClassroom";
import Detail from "../Components/DetailClassroom";
import ClassroomForm from "../Components/ClassroomForm";
import StudentForm from "../Components/StudentForm";
import StudentList from "../Components/StudentList";

const BaseStack = createStackNavigator(
  {
    Login: Login,
    ListClassroom: List,
    Detail: Detail,
    ClassroomForm: ClassroomForm,
    StudentForm: StudentForm,
    StudentList: StudentList
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);

const AppContainer = createAppContainer(BaseStack);

export default AppContainer;
