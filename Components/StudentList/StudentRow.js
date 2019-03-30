import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions/studentActions";

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
  SwipeRow,
  View
} from "native-base";
import { withNavigation } from "react-navigation";

const StudentRow = props => {
  let stu = props.student;
  return (
    <SwipeRow
      key={stu.id}
      disableRightSwipe
      rightOpenValue={-150}
      body={
        <View>
          <Text>{stu.first_name}</Text>
        </View>
      }
      right={
        <Grid>
          <Row>
            <Button
              success
              onPress={() => props.updateStu(stu, stu.id, props.navigation)}
            >
              <Icon active name="md-create" type="Ionicons" />
            </Button>
            <Button danger onPress={() => props.deleteStu(stu.id)}>
              <Icon active name="trash" />
            </Button>
          </Row>
        </Grid>
      }
    />
  );
};

const mapDispatchToProps = dispatch => ({
  deleteStu: stuID => dispatch(actionCreators.deleteStudent(stuID)),
  updateStu: (stu, stuID, nav) =>
    dispatch(actionCreators.updateStudent(stu, stuID, nav))
});

export default withNavigation(
  connect(
    null,
    mapDispatchToProps
  )(StudentRow)
);
