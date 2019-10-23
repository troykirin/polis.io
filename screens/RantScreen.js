import React, { useState } from "react";
import {
  Container,
  Item,
  Input,
  Label,
  Form,
  Content,
  Body
} from "native-base";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { getEntities } from "../api/api";
import { addTagsAndInputToUser } from "../api/firebase";

export default function RantScreen({ navigation }) {
  const [userInput, setUserInput] = useState("");
  const [zipcode, setZipcode] = useState("");
  const uid = navigation.getParam("uid", "");

  return (
    <Container>
      <Content>
        <Form style={{ marginBottom: 5 }}>
          <Item stackedLabel>
            <Label style={{ marginBottom: 5 }}>
              Rant about your community concerns
            </Label>
            <Input
              multiline
              value={userInput}
              onChangeText={text => setUserInput(text)}
            />
          </Item>
          <Item stackedLabel>
            <Label style={{ marginBottom: 5 }}>
              Give us your Zip Code
            </Label>
            <Input
              value={zipcode}
              onChangeText={text => setZipcode(text)}
            />
          </Item>
        </Form>
        <Body>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              let entities = await getEntities(userInput);
              await addTagsAndInputToUser(entities, userInput);
              navigation.navigate("Tags", { entities: entities });
            }}
          >
            <Text style={styles.buttonText}> Next </Text>
          </TouchableOpacity>
        </Body>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: "#4A6D7C",
    borderColor: "#4A6D7C",
    borderWidth: 1,
    borderRadius: 5,
    width: 200
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  },
});

RantScreen.navigationOptions = {
  title: "Tell us more about yourself",
  headerLeft: null
};
