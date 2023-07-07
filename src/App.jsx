/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button} from './components/Button';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Display} from './components/Display';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const isOperator = operator => {
  if (operator === '*') {
    return true;
  }
  if (operator === '/') {
    return true;
  }
  if (operator === '+') {
    return true;
  }
  if (operator === '-') {
    return true;
  }

  return false;
};

function App() {
  const [state, setState] = useState('0');

  const handleClick = e => {
    setState(prev =>
      isOperator(prev[prev.length - 1]) && isOperator(e)
        ? prev.slice(0, -1).concat(e)
        : prev.concat(e),
    );
  };

  const handleEvaluate = () => {
    // eslint-disable-next-line no-eval
    setState(eval(state));
  };
  return (
    <SafeAreaView style={style.container}>
      <Display value={state} />
      <View style={style.buttons}>
        <Button triple onClick={() => setState('')} label="AC" />
        <Button operation onClick={handleClick} label="/" />
        <Button onClick={handleClick} label="7" />
        <Button onClick={handleClick} label="8" />
        <Button onClick={handleClick} label="9" />
        <Button operation onClick={handleClick} label="*" />
        <Button onClick={handleClick} label="4" />
        <Button onClick={handleClick} label="5" />
        <Button onClick={handleClick} label="6" />
        <Button operation onClick={handleClick} label="-" />
        <Button onClick={handleClick} label="1" />
        <Button onClick={handleClick} label="2" />
        <Button onClick={handleClick} label="3" />
        <Button operation onClick={handleClick} label="+" />
        <Button triple onClick={handleClick} label="0" />
        <Button operation onClick={handleEvaluate} label="=" />
      </View>
    </SafeAreaView>
  );
}

export default App;
