import React from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

const ProductModal = ({ visible, onClose, productName }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType='slide'
      onRequestClose={onClose}
    >
      <View style={styles.backGroundModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Estás seguro que quieres ir a {productName}</Text> 
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Cancelar</Text> 
            </Pressable>
            <Pressable style={styles.button} onPress={() => onClose()}>
              <Text style={styles.buttonText}>Confirmar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  backGroundModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProductModal;
