import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import products from '../data/products.json'
import { colors } from '../global/colors'

const ItemDetail = ({ route }) => {
  const { id } = route.params

  // Buscar el producto con el id que viene en los parámetros
  const product = products.find(product => product.id === id)

  // Si el producto no se encuentra, puedes mostrar un mensaje de error
  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Producto no encontrado</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerDetail}>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={{ uri: product.thumbnail }}
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>Precio: $ {product.precio}</Text>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Comprar</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darksalmon',
    padding: 10,
  },
  containerDetail: {
    flex: 1,
  },
  containerText: {
    width: '80%',
    margin: 20,
    marginHorizontal: '10%',
  },
  title: {
    fontSize: 20,
    color: "white",
  },
  description: {
    fontSize: 18,
    color: "white",
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "white",
  },
  image: {
    width: '100%',
    height: 250,
    marginVertical: 10,
  },
  button: {
    width: '50%',
    marginHorizontal: '25%',
    backgroundColor: colors.background,
    borderRadius: 3,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
  },
  buttonText: {
    color: 'white',
  },
})
