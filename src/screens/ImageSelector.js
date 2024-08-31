import { StyleSheet, Text, View, Image} from 'react-native'
import SubmitButton from '../components/SubmitButton'
import React, { useEffect } from 'react'
import { colors } from '../global/colors'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import { usePatchImageProfileMutation } from '../services/shop'
import { useSelector } from 'react-redux'

const ImageSelector = ({navigation}) => {

  const [image,setImage] = useState("")
  const [triggerAddImageProfile] = usePatchImageProfileMutation()
  const localId = useSelector(state => state.auth.localId)


  const pickImage = async () => {
    const {granted} = await ImagePicker.requestCameraPermissionsAsync()
    if(!granted) return 
    const result = await ImagePicker.launchCameraAsync({
      aspect:[9,16],
      quality: 0.2,
      base64: true,
      allowsEditing:true,
    })

    if(result.canceled) return

    setImage(`data:image/jpeg;base64,` + result.assets[0].base64)
  }

  const confirmImage = () => {
    triggerAddImageProfile({image, localId})
    navigation.navigate("MyProfile")



  }

  return (
    <View style={styles.container}>
      <Image style={styles.profile}
      source={image ? {uri:image}:require("../../assets/img/profile (2).png")}
      resizeMode='cover'/>
      <SubmitButton title="Capturar Imagen" onPress={pickImage}/>
      <SubmitButton title="Confirmar" onPress={confirmImage}/>
    </View>
  )
}

export default ImageSelector

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