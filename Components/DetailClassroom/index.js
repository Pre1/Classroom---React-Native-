import React, { Component } from "react";
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
  Row,
  View
} from "native-base";

import * as actionCreators from "../../store/actions/clsDetailActions";
import { connect } from "react-redux";
import DeleteBtn from "../CRUDButtons/DeleteBtn";
class DetailClassroom extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title")
    };
  };

  componentDidMount() {
    let title = this.props.title;
    this.props.navigation.setParams({ title: title });
  }

  render() {
    const { cls } = this.props.detailReducer;
    console.log("TCL: render -> cls.teacher.id", cls.teacher.id);
    const { students, user } = this.props;
    console.log("TCL: render -> user", user);

    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Subject: {cls.subject}</Text>
            </CardItem>
            <CardItem bordered>
              <Text
                style={{
                  marginBottom: 10,
                  fontWeight: "bold"
                }}
              >
                Teacher: {cls.teacher && cls.teacher.username}
                {"\n"}
                Year: {cls.year}
                {"\n"}
              </Text>
            </CardItem>

            <CardItem bordered>
              <Body>
                <Text>
                  Accumsan habitant adipiscing odio at est integer varius,
                  blandit aliquam placerat eleifend morbi lobortis, commodo
                  tortor magna mattis dui purus.
                </Text>
              </Body>
            </CardItem>
            {user.user_id === cls.teacher.id && (
              <View>
                <CardItem
                  bordered
                  button
                  onPress={() => this.props.navigation.navigate("StudentList")}
                >
                  <Left>
                    <Text>Students</Text>
                  </Left>
                  <Body />
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </CardItem>

                <CardItem footer bordered style={{ alignSelf: "center" }}>
                  <Button
                    info
                    style={{ right: 5 }}
                    onPress={() =>
                      this.props.navigation.navigate("ClassroomForm", {
                        updated: true,
                        clsID: cls.id
                      })
                    }
                  >
                    <Text>Update</Text>
                  </Button>

                  <DeleteBtn sID={cls.id} />
                </CardItem>
              </View>
            )}
          </Card>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user,
  detailReducer: state.clsDetailReducer,
  students: state.studentReducer.students,
  title: `${state.clsDetailReducer.cls.subject} Classroom`
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailClassroom);
