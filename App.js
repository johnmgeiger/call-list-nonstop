// Expo Documentation to read:
//  AppLoading
//  SplashScreen
//  Linking (for calling)
//  Constants
//  Google

import React from 'react';
import { Linking } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, you faggot!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
