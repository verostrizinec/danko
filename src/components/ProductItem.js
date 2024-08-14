import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { colors } from '../global/colors'
import { useNavigation } from '@react-navigation/native'

const ProductItem = ({product}) => {

  const {width, height} = useWindowDimensions();
  const navigation = useNavigation()

  return (
    <Pressable style={styles.container} onPress={()=>navigation.navigate("Detail",{id:product.id})}>
      <Text style={[styles.title,width < 300 ? styles.titleMin: styles.titleMax]}>{product.description}</Text>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{uri:product.thumbnail}}
      />
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.background,
        marginVertical:10,
        flexDirection:"row",
        alignItems:"center",
        padding:10,
        width:"90%",
        marginHorizontal:"5%",
        gap:10,
        borderRadius:3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3
    },
    title:{
        width:"70%",
        color: "white",
    },
    titleMin: {
      fontSize: 14,
    },
    titleMax: {
      fontSize: 16,
    },
    image:{
      minxWidth: 80,
        width:"25%",
        maxWidth: 150,
        minHeight: 80,
        height:"25%",
        maxHeight: 150,
        borderRadius:3
    }
})