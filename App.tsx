import React from 'react';
import CounterApp from './src/CounterApp';
import {PaperProvider} from 'react-native-paper';
import 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  return (
    <PaperProvider>
      <CounterApp />
    </PaperProvider>
  );
};

export default App;
