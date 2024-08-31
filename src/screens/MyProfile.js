import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import SubmitButton from '../components/SubmitButton'
import { colors } from '../global/colors'

const MyProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.profile}
      source={require("../../assets/img/profile (2).png")}
      resizeMode='cover'/>
      <SubmitButton title="Agregar imagen de perfil" onPress={() => navigation.navigate("ImageSelector")}/>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        gap: 20,
        backgroundColor:colors.background,
    },
    profile:{
        width: 150,
        height: 150,
}})