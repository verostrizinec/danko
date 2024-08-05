import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import TitleHome from './src/components/TitleHome';
import SubtitleHome from './src/components/SubtitleHome';
import ProductsList from './src/components/ProductsList';
import Header from './src/components/Header';
import ItemListCategories from './src/screens/ItemListCategories';
import Home from './src/screens/Home';

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'Edu': require('./assets/fonts/EduAUVICWANTHand-VariableFont_wght.ttf'),
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  if (!fontLoaded) {
    return null; // Muestra una pantalla de carga si la fuente no está cargada
  }

  return (
    <View style={styles.container}>
      <Home/>
      <Header />
      <Text style={styles.titulo}>Accesorios</Text>
      
      {/*<TitleHome />
      <SubtitleHome />
      <ProductsList/>*/}

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Asegura que el contenedor ocupe todo el espacio disponible
    backgroundColor: 'darksalmon',
    alignItems: 'center',
    paddingTop: 50,
  },
  titulo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16, // Ajuste el tamaño de la fuente para mejor visibilidad
    marginTop: -50, // Ajustado para evitar superposición
    fontFamily: "Edu",
    marginLeft: 45,
  },
});

export default App;
