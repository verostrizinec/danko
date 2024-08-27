import { StyleSheet, Text, View, FlatList } from "react-native";
import CartItem from "../components/CartItem";
import { colors } from "../global/colors";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';  // Asegúrate de importar la acción

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartItem item={item} onDelete={handleDelete} />}
      />
      <View style={styles.containerConfirm}>
        <Text style={styles.textConfirm}>Confirmar</Text>
        <Text style={styles.textConfirm}>Total: $ {cart.total}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    backgroundColor: colors.background,
  },
  containerConfirm: {
    backgroundColor: colors.background,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 8,
    margin: 20,
  },
  textConfirm: {
    color: "white",
    fontSize: 20,
  },
});
