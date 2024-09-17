import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import CartItem from "../components/CartItem";
import { colors } from "../global/colors";
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, removeItem, incrementItem, decrementItem } from '../features/cart/cartSlice';  // Asegúrate de importar las acciones de incrementar/decrementar
import { usePostOrderMutation } from "../services/shop";

const Cart = ({navigation}) => {
  const cart = useSelector(state => state.cart);
  const [triggerPostOrder] = usePostOrderMutation();
  const dispatch = useDispatch();

  const handleAddOrder = () => {
    const createAdt = new Date().toLocaleString();
    const order = {
      ...cart,
      createAdt
    };
    triggerPostOrder({userId:"1", order});
    dispatch(clearCart());
    navigation.navigate("OrdersStack");
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementItem(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem(id));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem 
            item={item} 
            onDelete={handleDelete} 
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        )}
      />
      <View style={styles.containerConfirm}>
        <Pressable onPress={handleAddOrder}>
          <Text style={styles.textConfirm}>Confirmar</Text>
        </Pressable>
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
