import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { endAsyncEvent } from 'react-native/Libraries/Performance/Systrace'

const Logo = () => {
  return (
    <View>
     <Image
        source={require('C:\\Users\\veros\\Desktop\\coder-house\\reactNative\\danko\\assets\\img\\danSinFondo.png')} 
        style={styles.logo}
    />
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,
    },
})