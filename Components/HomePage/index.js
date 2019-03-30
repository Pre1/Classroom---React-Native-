// NativeBase Components
import { Container } from "native-base";
import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
// Components
import AppContainer from "../../Navigation";
import { getAllClasses } from "../../store/actions/clsListActions";
// Style
import styles from "./styles";

class HomePage extends Component {
  componentDidMount() {
    this.props.getAllClasses();
  }

  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <AppContainer />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getAllClasses: () => dispatch(getAllClasses())
});

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
