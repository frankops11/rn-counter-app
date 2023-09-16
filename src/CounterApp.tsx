import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CounterApp = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World :D</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CounterApp;
