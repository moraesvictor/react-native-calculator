import React from 'react';

import {StyleSheet, Dimensions, TouchableHighlight, Text} from 'react-native';

const style = StyleSheet.create({
  button: {
    fontSize: 41,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#F0F0F0',
    textAlign: 'center',
    borderColor: '#8888',
  },
  operationButton: {
    backgroundColor: '#fa8231',
    color: '#ffff',
  },
  doubleButton: {
    width: Dimensions.get('window').width / 2,
  },
  tripleButton: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});

export const Button = props => {
  const stylesButton = [style.button];
  if (props.double) {
    stylesButton.push(style.doubleButton);
  }
  if (props.triple) {
    stylesButton.push(style.tripleButton);
  }
  if (props.operation) {
    stylesButton.push(style.operationButton);
  }
  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  );
};
