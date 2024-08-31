import { StyleSheet, Text, View, FlatList } from 'react-native'
import OrderItem from '../components/OrderItem'
import { useGetOrdersByUserQuery } from '../services/shop'

const Orders = () => {

  const {data:orders,isSuccess,isError,error,isLoading} = useGetOrdersByUserQuery("1")

  const handleDelete = (id) => {
  };

  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=> <OrderItem item={item} onDelete={handleDelete}/>}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})