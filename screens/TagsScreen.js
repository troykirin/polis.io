import React, { useState } from "react";
import { Animated, StyleSheet, Text } from "react-native";
import { Content } from "native-base";
import ToggleCard from "../components/ToggleCard";
import { getUserTags, getUsers } from "../api/firebase";

export default function TagsScreen(props) {

  const { navigation } = props;
  const [entities, setEntities] = useState(navigation.getParam("entities", []));

  return (
    <Content style={styles.container}>
      <ToggleCard
        rant={"LGBT (or GLBT ) is an initialism that stands for lesbian, gay, bisexual, and transgender. In use since the 1990s, the term is an adaptation of the initialism LGB , which was used to replace the term gay in reference to the LGBT community beginning in the mid-to-late 1980s. People who are homeless are most often unable to acquire and maintain regular, safe, secure and adequate housing due to a lack of, or an unsteady income.  jobs now available in Vancouver, BC"}
        topics={["lgbt", "homeless", "jobs"]}
        locationText="University District, Seattle"
      />
      <ToggleCard
        rant={"When the burning of the Amazon was at its peak in August, there were thousands of individual fires, almost three times as many that month - 30,901 - compared with the same period last year."}
        topics={["environment", "forest fires"]}
        locationText="Fremont, Seattle"
      />
      <ToggleCard
        rant={"People who are homeless are most often unable to acquire and maintain regular, safe, secure and adequate housing due to a lack of, or an unsteady income. When the burning of the Amazon was at its peak in August, there were thousands of individual fires, almost three times as many that month - 30,901 - compared with the same period last year."}
        topics={["homeless", "forest fires"]}
        locationText="Ballard, Seattle"
      />
    </Content>
  );
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

TagsScreen.navigationOptions = {
  title: "Your Feed",
  headerLeft: null
}
