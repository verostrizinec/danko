import { StyleSheet, View, FlatList, Text } from 'react-native';
import OrderItem from '../components/OrderItem';
import { useGetOrdersByUserQuery, useDeleteOrderMutation } from '../services/shop';
import { colors } from '../global/colors';

const Orders = () => {
  const { data: orders, isSuccess, isError, error, isLoading } = useGetOrdersByUserQuery("1");
  const [deleteOrder] = useDeleteOrderMutation(); 

  const handleDelete = async (id) => {
    try {

      await deleteOrder({ userId: "1", orderId: id }).unwrap();
    } catch (err) {
      console.error("Error deleting order:", err);
    }
  };

  if (isLoading) return <Text style={styles.loading}>Loading...</Text>;
  if (isError) return <Text style={styles.error}>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      {isSuccess && (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id.toString()} 
          renderItem={({ item }) => <OrderItem item={item} onDelete={handleDelete} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
  },
  loading: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Orders;
