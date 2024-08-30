import { StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from '../global/colors';

const OrderItem = ({item}) => {
  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.container}>
        <View style={styles.containerText}>
        <Text style={styles.date}>{item.createAdt}</Text>
          <Text style={styles.total}>Total: $ {item.total}</Text>
       </View>
        <AntDesign name="search1" size={24} color="white" />
      </View>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1, // Ocupa todo el espacio disponible
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
