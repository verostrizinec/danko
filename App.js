import { StatusBar } from 'expo-status-bar'; 
import { StyleSheet, Text, View } from 'react-native'; 
import * as Font from 'expo-font'; 
import React, { useState, useEffect } from 'react';
import Navigator from './src/navigation/Navigator'; 
import { store } from './src/app/store'
import { Provider } from 'react-redux'

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false); // Declara un estado llamado fontLoaded con el valor inicial false.

  useEffect(() => { 
    async function loadFont() { // Define una función asíncrona que cargará la fuente personalizada.
      try {
        await Font.loadAsync({ // Carga la fuente desde la carpeta assets/fonts de forma asíncrona.
          'Edu': require('./assets/fonts/EduAUVICWANTHand-VariableFont_wght.ttf'),
        });
        setFontLoaded(true); // Una vez cargada la fuente, actualiza el estado para indicar que la fuente está lista.
      } catch (error) {
        console.error('Error loading font', error); // Si hay un error al cargar la fuente, muestra el error en la consola.
        setFontLoaded(false); // En caso de error, marca fontLoaded como false.
      }
    }
    loadFont(); // Llama a la función loadFont inmediatamente después de definirla.
  }, []); // El segundo argumento como un array vacío indica que este efecto se ejecuta solo una vez, cuando el componente se monta.

  return (
    <View style={styles.container}> 
    <Provider store={store}>
      <Navigator /> 
    </Provider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1, // Hace que el componente ocupe todo el espacio disponible.
    backgroundColor: 'darksalmon', 
    paddingTop: 40, 
  },
});

export default App; 
