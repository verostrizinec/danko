import { Pressable, StyleSheet, Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { colors } from '../global/colors';

const CartItem = ({ item, onDelete, onIncrement, onDecrement }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.precio}>$ {item.precio}</Text>

        <View style={styles.counterContainer}>
          <Pressable style={styles.counterButton} onPress={() => onDecrement(item.id)}>
            <Text style={styles.counterText}>-</Text>
          </Pressable>
          <Text style={styles.counterValue}>{item.quantity}</Text> 
          <Pressable style={styles.counterButton} onPress={() => onIncrement(item.id)}>
            <Text style={styles.counterText}>+</Text>
          </Pressable>
        </View>
      </View>
      <Pressable onPress={() => onDelete(item.id)}>
        <Entypo name="trash" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginHorizontal: '5%',
    backgroundColor: colors.background,
    marginVertical: 10,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  containerText: {
    width: '70%',
    gap: 5,
  },
  description: {
    color: 'white',
    fontSize: 20,
  },
  category: {
    color: 'white',
    fontSize: 12,
  },
  precio: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  counterButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  counterText: {
    color: 'white',
    fontSize: 18,
  },
  counterValue: {
    marginHorizontal: 20,
    fontSize: 18,
    color: 'white',
  },
});
