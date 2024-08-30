import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import OrderItem from '../components/OrderItem'
import { useGetOrdersByUserQuery } from '../services/shop'
import { useEffect } from 'react'

const Orders = () => {

  const {data:orders,isLoading} = useGetOrdersByUserQuery("1")


  if (isLoading) {
    return <ActivityIndicator style={styles.spin} size="large" />;
  }

  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=> <OrderItem item={item}/>}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})