import { StyleSheet, View, Image, ActivityIndicator, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import SubmitButton from '../components/SubmitButton';
import { colors } from '../global/colors';
import { useSelector } from 'react-redux';
import { useGetUserProfileQuery } from '../services/shop'; 
import { useDispatch } from 'react-redux';
import { deleteSession } from '../db';
import { clearUser } from '../features/auth/authSlice';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const MyProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const idToken = useSelector(state => state.auth.idToken);

  const [image, setImage] = useState("");
  const localId = useSelector(state => state.auth.localId);
  

  const { data, error, isLoading } = useGetUserProfileQuery(localId);

  const onLogout = () => {
    deleteSession();
    dispatch(clearUser());
  };

  useEffect(() => {
    if (data && data.image) {
      setImage(data.image);
    }
  }, [data]);

  if (isLoading) {
    return <ActivityIndicator size="large" color={colors.primary} />;
  }

  return (
    <View style={styles.container}>
      {idToken && (
        <Pressable onPress={onLogout} style={styles.logout}>
          <MaterialIcons name="logout" size={30} color="white" />
        </Pressable>
      )}
      <Image
        style={styles.profile}
        source={image ? { uri: image } : require("../../assets/img/profile (2).png")}
        resizeMode="cover"
      />
      <SubmitButton title="Agregar imagen de perfil" onPress={() => navigation.navigate("ImageSelector")} />
    </View>
  );
};

export default MyProfile;

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
  logout: {
    left: 150,
  },
});
