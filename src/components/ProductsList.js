import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

const products = [
  { id: '1', name: 'Aritos' },
  { id: '2', name: 'Escarapelas' },
  { id: '3', name: 'Hebillas' },
  { id: '4', name: 'Llaveros' },
  { id: '5', name: 'Prendedores' },
];

const ProductsList = () => {
  const renderItem = ({ item }) => (
    <Pressable
      style={styles.product}
      onPress={() => {
        console.log(`Producto seleccionado: ${item.name}`);
      }}
    >
      <Text style={styles.productText}>{item.name}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Asegura que el contenedor ocupe todo el espacio disponible
    width: '100%', // Asegura que ocupe todo el ancho disponible
    padding: 10,
  },
  list: {
    // Opcional: Ajusta el estilo de contenido de la lista
  },
  product: {
    padding: 5,
    marginVertical: 5,
    backgroundColor: '#ffe4e1',
    borderRadius: 5,
    alignItems: 'center',
  },
  productText: {
    fontSize: 16,
    color: 'black',
  },
});

export default ProductsList;
