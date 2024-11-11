import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootContainer from './src/rootContainer';

const App: React.FC = () => {
return(
  <SafeAreaProvider>
    <RootContainer />
  </SafeAreaProvider>
);

};


export default App;


