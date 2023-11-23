/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import * as Iconos from 'react-native-vector-icons';
import Routes from './src/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PaperProvider} from 'react-native-paper';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <PaperProvider>
          <View style={styles.android}>
            <Routes
              settings={{
                icon: props => <Iconos {...props} />,
              }}
            />
          </View>
        </PaperProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 32,
    // padding: 24,
  },

  android: {
    ...(Platform.OS === 'android' && {
      paddingTop: 0,
      flex: 1,
      backgroundColor: '#262626',
    }),
  },
});

export default App;
