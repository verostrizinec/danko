// src/components/ProductsList.js
import React, { useState } from 'react'; // Importa React y useState para manejar el estado
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'; // Importa los componentes necesarios de react-native
import ProductModal from './ProductModal'; // Importa el componente ProductModal

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
    marginTop: 15, // Espacio superior del contenedor
  },
  item: {
    backgroundColor: "#ffa07a", // Color de fondo del botón del producto
    borderRadius: 10, // Bordes redondeados del botón
    paddingBottom: 5, // Espaciado interno inferior
    padding: 8, // Espaciado interno
    marginTop: 8, // Espacio superior entre productos
  },
  itemText: {
    textAlign: 'center', // Centra el texto horizontalmente
    fontSize: 18, // Tamaño de la fuente del texto
    color: "white", // Color del texto
    fontWeight: "bold", // Peso de la fuente
  }
});

export default ProductsList; // Exporta el componente ProductsList para que pueda ser utilizado en otros archivos
