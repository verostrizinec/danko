import React, { useState } from 'react'; 
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'; 
import ProductModal from './ProductModal'; 

const ProductsList = () => {
  const [products] = useState([ // Estado inicial con un array de productos
    { id: '1', name: 'Aritos' },
    { id: '2', name: 'Escarapelas' },
    { id: '3', name: 'Hebillas' },
    { id: '4', name: 'Llaveros' },
    { id: '5', name: 'Prendedores' },
  ]);

  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del modal

  const [selectedProduct, setSelectedProduct] = useState(''); // Estado para almacenar el nombre del producto seleccionado

  const handlePress = (productName) => { // Función para manejar la presión en un producto
    setSelectedProduct(productName); // Establece el nombre del producto seleccionado
    setModalVisible(true); // Muestra el modal
  };

  const renderItem = ({ item }) => ( // Función para renderizar cada producto
    <Pressable style={styles.item} onPress={() => handlePress(item.name)}> 
      <Text style={styles.itemText}>{item.name}</Text> 
    </Pressable>
  );

  return (
    <View style={styles.container}> 
      <FlatList 
        data={products} // Datos de la lista
        renderItem={renderItem} // Función para renderizar cada ítem
        keyExtractor={(item) => item.id} // Extrae la clave única para cada ítem
      />
      <ProductModal // Renderiza el modal para mostrar detalles del producto
        visible={modalVisible} // Controla la visibilidad del modal
        onClose={() => setModalVisible(false)} // Función para cerrar el modal
        productName={selectedProduct} // Pasa el nombre del producto al modal
      />
    </View>
  );
};

// Estilos para la lista de productos
const styles = StyleSheet.create({
  container: {
    marginTop: 15, 
  },
  item: {
    backgroundColor: "#ffa07a", 
    borderRadius: 10, 
    paddingBottom: 5, 
    padding: 8, 
    marginTop: 8, 
  },
  itemText: {
    textAlign: 'center', 
    fontSize: 18,
    color: "white", 
    fontWeight: "bold", 
  }
});

export default ProductsList; 
