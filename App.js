import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import ItemListCategories from './src/screens/ItemListCategories';
import Home from './src/screens/Home';
import Search from './src/components/Search';

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [categorySelected, setCategorySelected] = useState("");

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
  }, []); // La lista de dependencias está vacía, así que el efecto solo se ejecuta una vez

  if (!fontLoaded) {
    return (
      <View style={styles.container}>
        <Text>Cargando...</Text>
      </View>
    );
  }

    const handleCategorySelected = (category) => {
      setCategorySelected(category);
    };


  return (
    <>
    <View style={styles.container}>
      <View>
      {categorySelected ? (
        <ItemListCategories category={categorySelected} />
      ) : (
        <Home handleCategorySelected={handleCategorySelected} />
      )}
      </View>
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darksalmon',
    alignItems: 'center',
    paddingTop: 40,
  },
});

export default App;
