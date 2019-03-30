import React, { Component } from "react";

import { connect } from "react-redux";
import { SearchBar } from "react-native-elements";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  List,
  ListItem,
  Left,
  Right,
  Title,
  Button,
  Icon,
  Grid,
  Col,
  Row
} from "native-base";

import CreateBtn from "../CRUDButtons/CreateBtn";

import StudentRow from "./StudentRow";

class StudentList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Students",
      headerRight: <CreateBtn nav="StudentForm" />
    };
  };

  state = {
    query: "",
    filteredStu: []
  };

  componentDidMount = () => {
    let stu = this.props.students;
    this.setState({ filteredStu: stu });
  };

  updateSearch = query => {
    let ls = this.props.students;
    let filtered = ls.filter(elm =>
      elm.first_name.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({
      query: query,
      filteredStu: filtered
    });
  };
  componentDidUpdate = (prevProps, prevState) => {
    console.log("TCL: componentDidUpdate -> prevProps", prevProps);
    let { students } = this.props;
    console.log("TCL: componentDidUpdate -> students", students);
    if (prevProps.students.length !== this.props.students.length) {
      this.setState({ filteredStu: this.props.students });
    }
  };

  render() {
    // let { students } = this.props;
    let students = this.state.filteredStu;
    let { query } = this.state;
    return (
      <Container>
        <Content padder>
          <SearchBar
            lightTheme
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={query}
          />
          <List>
            {students.map(stu => (
              <StudentRow student={stu} key={stu.id} />
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  students: state.studentReducer.students
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList);
