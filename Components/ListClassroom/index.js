import React, { Component } from "react";
import { connect } from "react-redux";
import ClassRoom from "./ClassRoom";

import { Content, List, Text } from "native-base";
import CreateBtn from "../CRUDButtons/CreateBtn";

export class ListClassroom extends Component {
  static navigationOptions = {
    title: "Classrooms",
    headerRight: <CreateBtn nav="ClassroomForm" />
  };

  render() {
    const { classes, loading } = this.props.listReducer;
    return (
      <Content>
        <List>
          {classes.map(clsroom => (
            <ClassRoom cls={clsroom} key={clsroom.id} />
          ))}
        </List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  listReducer: state.clsListReducer
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListClassroom);
