import { StyleSheet, View, Image, Alert } from 'react-native';
import SubmitButton from '../components/SubmitButton';
import React, { useState } from 'react';
import { colors } from '../global/colors';
import * as ImagePicker from 'expo-image-picker';
import { usePatchImageProfileMutation } from '../services/shop';
import { useSelector } from 'react-redux';

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState("");
  const [triggerAddImageProfile, { isLoading, error }] = usePatchImageProfileMutation();
  const localId = useSelector(state => state.auth.localId);

  const pickImage = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      Alert.alert("Permisos requeridos", "Necesitamos permiso para acceder a la cámara.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      aspect: [9, 16],
      quality: 0.2,
      base64: true,
      allowsEditing: true,
    });

    if (result.canceled) return;

    setImage(`data:image/jpeg;base64,` + result.assets[0].base64);
  };

  const confirmImage = async () => {
    if (!image) {
      Alert.alert("Error", "Debes capturar una imagen antes de confirmar.");
      return;
    }

    try {
      const response = await triggerAddImageProfile({ image, localId }).unwrap();
      console.log("Imagen subida exitosamente:", response);
      Alert.alert("Éxito", "Imagen de perfil actualizada.");
      navigation.navigate("MyProfile");
    } catch (err) {
      console.error("Error en la subida de imagen:", err);
      Alert.alert("Error", "No se pudo actualizar la imagen de perfil. Verifica tu conexión y configuración.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.profile}
        source={image ? { uri: image } : require("../../assets/img/profile (2).png")}
        resizeMode="cover"
      />
      <SubmitButton title="Capturar Imagen" onPress={pickImage} />
      <SubmitButton title="Confirmar" onPress={confirmImage} disabled={isLoading} />
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    gap: 20,
    backgroundColor: colors.background,
  },
  profile: {
    width: 150,
    height: 150,
  },
});
