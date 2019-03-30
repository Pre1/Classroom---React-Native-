import React from "react";
import { deleteClass } from "../../store/actions/clsDetailActions";
import { deleteStudent } from "../../store/actions/studentActions";
import { connect } from "react-redux";
import { Button, Text } from "native-base";
const DeleteBtn = props => {
  let { sId, stu } = props;
  let selectedAction = () => {
    if (stu) return props.deleteStu;
    return props.deleteCls;
  };
  return (
    <Button danger onPress={() => selectedAction(sId)}>
      <Text>Delete</Text>
    </Button>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteCls: sId => dispatch(deleteClass(sId)),
  deleteStu: sId => dispatch(deleteStudent(sId))
});

export default connect(
  null,
  mapDispatchToProps
)(DeleteBtn);
