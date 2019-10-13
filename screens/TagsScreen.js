import React, { Component } from "react";
import { Animated, ScrollView, StyleSheet, View, Text } from "react-native";

const test_list = ["a", "b", "c"];

export default class TagsScreen extends Component {
  constructor() {
    super();

    this.state = { valueArray: test_list, disabled: false };
    this.animatedValue = new Animated.Value(0);
  }

  render() {
    const animationValue = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-59, 0]
    });

    let newArray = this.state.valueArray.map((item, key) => {
      console.log(item);
      return (
        <View
          key={key}
          style={
            [
              // styles.viewHolder,
              // {
              //   opacity: this.animatedValue,
              // //   transform: [{ translateY: animationValue }]
              // }
            ]
          }
        >
          <Text style={styles.headerText}>{item}</Text>
        </View>
      );
    });

    return (
      <View style={styles.container}>
        <Text>HELLO</Text>
        {newArray}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  viewHolder: {
    height: 55,
    backgroundColor: "#ff4081",
    justifyContent: "center",
    alignItems: "center",
    margin: 4
  },
  headerText: {
    color: "black",
    fontSize: 25
  },
  buttonDesign: {
    position: "absolute",
    right: 25,
    bottom: 25,
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonImage: {
    resizeMode: "contain",
    width: "100%"
  }
});
