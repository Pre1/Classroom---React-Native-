import React, { Component } from "react";
import { Icon, Button, Text } from "native-base";
import { withNavigation } from "react-navigation";

class CreateBtn extends Component {
  render() {
    return (
      <Button transparent success>
        <Icon
          onPress={() => this.props.navigation.navigate(this.props.nav)}
          name="md-create"
          type="Ionicons"
        />
      </Button>
    );
  }
}

export default withNavigation(CreateBtn);
