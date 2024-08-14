import { StyleSheet, View } from 'react-native'
import React from 'react'
import Categories from '../components/Categories'

const Home = () => {

  return (
    <View style={styles.container}>
      <Categories />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible
    backgroundColor: 'darksalmon', // Aplica el color de fondo también aquí
  },
});
