import React, { useState } from "react";
import { Animated, StyleSheet, Text } from "react-native";
import { Content } from "native-base";
import ToggleCard from "../components/ToggleCard";

export default function TagsScreen(props) {

  const { navigation } = props;
  const [entities, setEntities] = useState(navigation.getParam("entities", []));
  const [userEntities, setUserEntities] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const newArray = entities.map((item, key) => {
    return (
      <ToggleCard
        key={key}
        item={item}
      />
    );
  });

  return (
    <Content style={styles.container}>
      {newArray}
    </Content>
  );

  function selectCard(item) {

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
