import React from 'react';
import {View} from 'react-native';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const surface = {
    flex: 1,
    backgroundColor: 'red',
  };

  return (
    <SafeAreaView style={surface}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={surface.backgroundColor}
      />
      <View style={surface} />
    </SafeAreaView>
  );
}

export default App;
