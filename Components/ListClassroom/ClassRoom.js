import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
// NativeBase Components
import {
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body
} from "native-base";
import styles from "./styles";

import { withNavigation } from "react-navigation";
import * as actionCreators from "../../store/actions/clsDetailActions";
import { connect } from "react-redux";

class ClassRoom extends Component {
  render() {
    let { cls, navigation } = this.props;
    return (
      <ImageBackground
        source={require("../../assets/school.jpg")}
        style={styles.background}
      >
        <View style={styles.background}>
          <View style={styles.overlay} />

          {/* onPress */}
          <ListItem
            button
            style={styles.listitem}
            onPress={() => this.props.getClass(cls.id, navigation)}
          >
            <Card style={styles.transparent}>
              <CardItem bordered style={styles.transparent}>
                <Left>
                  <Body>
                    <Text style={styles.textMain}>{cls.subject}</Text>
                    <Text note style={styles.text}>
                      {cls.year}
                    </Text>
                  </Body>

                  {/* <Text style={styles.text}>{cls.subject}</Text>
                  <Text note style={styles.text}>
                    {cls.year}
                  </Text> */}
                </Left>
              </CardItem>
            </Card>
          </ListItem>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  getClass: (clsId, nav) => dispatch(actionCreators.getClass(clsId, nav))
});

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ClassRoom)
);
