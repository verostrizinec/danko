import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import Navigator from './src/navigation/Navigator';


const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      try {
        await Font.loadAsync({
          'Edu': require('./assets/fonts/EduAUVICWANTHand-VariableFont_wght.ttf'),
        });
        setFontLoaded(true);
      } catch (error) {
        console.error('Error loading font', error);
        setFontLoaded(false);
      }
    }
    loadFont();
  }, []);

  return (
    <View style={styles.container}>
    <Navigator />
    <StatusBar style="auto" />
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darksalmon',
    paddingTop: 40,
  },
});

export default App;
