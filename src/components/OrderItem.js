import { StyleSheet, Text, View, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { colors } from '../global/colors';

const OrderItem = ({ item, onDelete }) => {
  if (!item) {
    return null;  // Maneja el caso en que item es null o undefined
  }

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.date}>{item.createAdt || 'No Date'}</Text>
          <Text style={styles.total}>Total: $ {item.total || '0.00'}</Text>
        </View>
        <Pressable onPress={() => onDelete(item.id)}>
          <Entypo name="trash" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: colors.background,
    paddingBottom: 10,
  },
  container: {
    backgroundColor: colors.background,
    borderWidth: 2,
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 3,
    borderColor: "white",
  },
  containerText: {
    gap: 40,
  },
  date: {
    fontSize: 16,
    color: "white",
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
