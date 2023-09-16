import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FAB, Text, withTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

const CounterApp = () => {
  const [counter, setCounter] = React.useState(10);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textWrapper}>
        <Text variant="headlineSmall">Counter:</Text>
        <Text variant="titleLarge">{counter}</Text>
      </View>
      <FAB
        icon="minus"
        style={styles.fabStyleLeft}
        disabled={counter === 0}
        onPress={() => setCounter(counter - 1)}
      />
      <FAB
        icon="plus"
        style={styles.fabStyleRight}
        onPress={() => setCounter(counter + 1)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  textWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  fabStyleRight: {
    bottom: 32,
    right: 32,
    position: 'absolute',
  },
  fabStyleLeft: {
    bottom: 32,
    left: 32,
    position: 'absolute',
  },
});

export default withTheme(CounterApp);
