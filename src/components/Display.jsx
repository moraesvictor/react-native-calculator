import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const style = StyleSheet.create({
  display: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'flex-end',
    padding: 20,
  },
  displayValue: {
    fontSize: 60,
    color: '#ffff',
  },
});

export const Display = props => {
  return (
    <View style={style.display}>
      <Text numberOfLines={1} style={style.displayValue}>
        {props.value}
      </Text>
    </View>
  );
};
