import React, { Component } from "react";
import { Card, CardItem, Body, Switch } from "native-base";
import { Text, StyleSheet } from "react-native";

export default class ToggleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };

    this.toggleCard = this.toggleCard.bind(this);
  }

  toggleCard() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <Card
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 20,
          backgroundColor: this.state.isToggleOn ? "white" : "blue"
        }}
      >
        <CardItem button onPress={this.toggleCard}>
          <Body>
            <Text>{this.props.item}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  off: {
    backgroundColor: "white",
    color: "black"
  },
  on: {
    backgroundColor: "blue",
    color: "white"
  }
});
