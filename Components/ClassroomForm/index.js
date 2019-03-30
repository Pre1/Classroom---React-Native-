import React, { Component } from "react";
import { connect } from "react-redux";
import { createClass } from "../../store/actions/clsListActions";
import { updateClass } from "../../store/actions/clsDetailActions";

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
  Header
} from "native-base";

class ClassroomForm extends Component {
  static navigationOptions = {
    title: "Create Classroom",
    headerLeft: null
  };

  state = {
    subject: "",
    grade: "",
    year: ""
  };

  componentDidMount = () => {
    const { subject, grade, year } = this.props.cls;
    const updated = this.props.navigation.getParam("updated");
    if (updated) {
      this.setState((prevState, props) => {
        return {
          subject: subject,
          grade: String(grade),
          year: year
        };
      });
    }
  };

  handleSubmit = () => {
    const { updated, clsID } = this.props.navigation.state.params;
    console.log("TCL: ClassroomForm -> handleSubmit -> clsID", clsID);
    if (updated) {
      this.props.updateCls(this.state, clsID, this.props.navigation);
    } else {
      this.props.createCls(this.state, this.props.navigation);
    }
  };
  render() {
    return (
      <Content>
        <Header transparent />
        <List>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Body>
              <Form>
                <Body>
                  <Label style={{ color: "white" }}>Subject</Label>
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
                    onChangeText={subject => this.setState({ subject })}
                    value={this.state.subject}
                  />
                </Item>

                <Body>
                  <Label style={{ color: "white" }}>Grade</Label>
                </Body>
                <Item
                  rounded
                  style={{ backgroundColor: "white", marginTop: 10 }}
                >
                  <Input
                    keyboardType="numeric"
                    onChangeText={grade => this.setState({ grade })}
                    value={this.state.grade}
                  />
                </Item>

                <Body>
                  <Label style={{ color: "white" }}>year</Label>
                </Body>
                <Item
                  rounded
                  style={{ backgroundColor: "white", marginTop: 10 }}
                >
                  <Input
                    keyboardType="numeric"
                    onChangeText={year => this.setState({ year })}
                    value={this.state.year}
                  />
                </Item>
              </Form>
            </Body>
          </ListItem>

          <Body style={{ marginTop: 20 }}>
            <Button rounded success onPress={this.handleSubmit}>
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
  user: state.authReducer.user,
  cls: state.clsDetailReducer.cls
});
const mapDispatchToProps = dispatch => ({
  createCls: (cls, nav) => dispatch(createClass(cls, nav)),
  updateCls: (cls, clsID, nav) => dispatch(updateClass(cls, clsID, nav))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClassroomForm);
