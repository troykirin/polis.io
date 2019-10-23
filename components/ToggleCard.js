import React, { Component } from "react";
import { Card, CardItem, Body, Switch } from "native-base";
import { Text, StyleSheet } from "react-native";

import React from 'react';
import { Card, CardItem, Body, Badge } from 'native-base';
import { Text } from 'react-native';

export default function ToggleCard(props) {
  const generateTopicText = props.topics.map((item, key) => {
    return (
      <Badge key={key} style={{ padding: 5, marginRight: 10, backgroundColor: "#4A6D7C" }}><Text style={{ color: "white", fontWeight: "bold" }}>{item}</Text></Badge>
    )
  })

  return (
    <Card style={{ marginLeft: 15, marginRight: 15, marginTop: 15, marginBottom: 15 }}>
      <CardItem header>
        {generateTopicText}
      </CardItem>
      <CardItem>
        <Body>
          <Text>{props.rant}</Text>
        </Body>
      </CardItem>
      <CardItem footer>
        <Text>{props.locationText}</Text>
      </CardItem>
    </Card>
  )
}