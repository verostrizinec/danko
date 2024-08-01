import React from 'react';
import { Modal, View, Text, Button } from 'react-native';

const ProductModal = ({ visible, product, onClose }) => (
  <Modal
    transparent={true} // Fondo del modal será transparente
    visible={visible} // Controla la visibilidad del modal
    animationType="slide" // Animación al abrir y cerrar el modal
  >
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Contenedor del modal */}
      <View style={{ width: 300, padding: 20, backgroundColor: 'white', borderRadius: 10 }}>
        <Text>{product.name}</Text> {/* Muestra el nombre del producto en el modal */}
        <Button title="Cerrar" onPress={onClose} /> {/* Botón para cerrar el modal */}
      </View>
    </View>
  </Modal>
);

export default ProductModal;
