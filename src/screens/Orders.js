import { StyleSheet, View, FlatList, Text } from 'react-native'
import OrderItem from '../components/OrderItem'
import { useGetOrdersByUserQuery, useDeleteOrderMutation } from '../services/shop'

const Orders = () => {
  const { data: orders, isSuccess, isError, error, isLoading } = useGetOrdersByUserQuery("1")
  const [deleteOrder] = useDeleteOrderMutation() // Obtener el hook de eliminación

  const handleDelete = async (id) => {
    try {
      // Llamar a la mutación de eliminación
      await deleteOrder({ userId: "1", orderId: id }).unwrap()
    } catch (err) {
      console.error("Error deleting order:", err)
    }
  }

  if (isLoading) return <Text>Loading...</Text>
  if (isError) return <Text>Error: {error.message}</Text>

  return (
    <View>
      {isSuccess && (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <OrderItem item={item} onDelete={handleDelete} />}
        />
      )}
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})
