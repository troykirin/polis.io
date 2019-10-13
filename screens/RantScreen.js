import React, { useState } from 'react';
import { Container, Item, Input, Button, Label, Form, Content, Body } from 'native-base';
import { StyleSheet, Text } from 'react-native';
import { getEntities } from '../api/api';

export default function RantScreen(props) {
  const [userInput, setUserInput] = useState('');

  return (
    <Container>
      <Content>
        <Form style={{ marginBottom: 5 }}>
          <Item stackedLabel>
            <Label style={{ marginBottom: 5 }}>Rant about your community concerns</Label>
            <Input
              multiline
              value={userInput}
              onChangeText={(text) => setUserInput(text)}
            />
          </Item>
        </Form>
        <Body>
          <Button
            primary
            style={styles.button}
            onPress={() => {
              let entities = getEntities(userInput)
              console.log(entities);
            }}
          >
            <Text> Next </Text>
          </Button>
        </Body>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5
  }
})

RantScreen.navigationOptions = {
  title: "Tell us more about yourself"
};
