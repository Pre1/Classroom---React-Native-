import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/studentActions";

// NativeBase Components
import {
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Label,
  Input,
  Item,
  Content,
  Header,
  Picker,
  DatePicker
} from "native-base";

class StudentForm extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Add a Student"
    };
  };
  componentDidMount = () => {};

  state = {
    first_name: "",
    last_name: "",
    dob: "",
    exam_grade: "",
    gender: "",
    classroom: ""
  };

  componentDidMount = () => {
    this.setState({ classroom: this.props.clsID });
  };

  handleDate = date => {
    let selDay = date.getDate();
    let selMonth = date.getMonth() + 1;
    let selYear = date.getFullYear();
    let res = selYear + "-" + selMonth + "-" + selDay;
    this.setState({ dob: res });
  };
  render() {
    let state = this.state;
    console.log("TCL: StudentForm -> render -> state", state);
    return (
      <Content>
        <Header transparent />
        <List>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Body>
              <Form>
                <Body>
                  <Label style={{ color: "white" }}>First Name</Label>
                </Body>
                <Item
                  rounded
                  style={{
                    backgroundColor: "white",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={first_name => this.setState({ first_name })}
                    value={this.state.first_name}
                  />
                </Item>

                <Body>
                  <Label style={{ color: "white" }}>Last Name</Label>
                </Body>
                <Item
                  rounded
                  style={{ backgroundColor: "white", marginTop: 10 }}
                >
                  <Input
                    numeric
                    onChangeText={last_name => this.setState({ last_name })}
                    value={this.state.last_name}
                  />
                </Item>

                <Body>
                  <Label style={{ color: "white", marginTop: 15 }}>
                    Date of Birth
                  </Label>
                </Body>
                <Item
                  rounded
                  style={{ backgroundColor: "white", marginTop: 10 }}
                >
                  {/* <Input
                    onChangeText={dob => this.setState({ dob })}
                    value={this.state.dob}
                  /> */}

                  <DatePicker
                    defaultDate={new Date()}
                    minimumDate={new Date()}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    placeHolderText="Select date"
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.handleDate}
                  />
                  {/* <Text>{this.state.dob.toString().substr(4, 12)}</Text> */}
                </Item>

                <Body>
                  <Label style={{ color: "white", marginTop: 15 }}>
                    Exam Grade
                  </Label>
                </Body>
                <Item
                  rounded
                  style={{ backgroundColor: "white", marginTop: 10 }}
                >
                  <Input
                    onChangeText={exam_grade => this.setState({ exam_grade })}
                    value={this.state.exam_grade}
                  />
                </Item>

                <Body>
                  <Label style={{ color: "white", marginTop: 15 }}>
                    Gender
                  </Label>
                </Body>
                <Item
                  rounded
                  style={{ backgroundColor: "white", marginTop: 10 }}
                >
                  {/* <Input
                    onChangeText={gender => this.setState({ gender })}
                    value={this.state.gender}
                  /> */}

                  <Picker
                    note
                    mode="dropdown"
                    style={{ width: 150 }}
                    selectedValue={this.state.gender}
                    onValueChange={gender => this.setState({ gender })}
                  >
                    <Picker.Item label="Male" value="M" />
                    <Picker.Item label="Female" value="F" />
                  </Picker>
                </Item>
              </Form>
            </Body>
          </ListItem>

          <Body style={{ marginTop: 20 }}>
            <Button
              rounded
              success
              onPress={() =>
                this.props.addStudent(this.state, this.props.navigation)
              }
            >
              <Text>Submit</Text>
            </Button>
          </Body>

          <Body style={{ marginTop: 20 }}>
            <Button
              rounded
              success
              onPress={() => this.props.navigation.goBack()}
            >
              <Text>Back</Text>
            </Button>
          </Body>
        </List>
        <Body>
          <Label style={{ color: "red", opacity: 0.6 }} />
        </Body>
      </Content>
    );
  }
}
const mapStateToProps = state => ({
  clsID: state.clsDetailReducer.cls.id,
  user: state.authReducer.user
});
const mapDispatchToProps = dispatch => ({
  addStudent: (stu, nav) => dispatch(actionCreators.createStudent(stu, nav))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentForm);
