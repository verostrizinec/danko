import { StyleSheet, Text, View, Image } from 'react-native'


const Header = () => {
  return (
    <View>
     <Image
        source={require('C:\\Users\\veros\\Desktop\\coder-house\\reactNative\\danko\\assets\\img\\danSinFondo.png')} 
        style={styles.logo}
    />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,
    },
})