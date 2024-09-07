import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { deleteSession } from '../db';
import { useDispatch } from 'react-redux';
import { clearUser } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation

const Header = ({ title, showBackButton }) => {
  const dispatch = useDispatch();
  const idToken = useSelector(state => state.auth.idToken);
  const navigation = useNavigation(); // Obtén la instancia de navegación

  const onLogout = () => {
    deleteSession();
    dispatch(clearUser());
  };

  return (
    <View style={styles.container}>
      {showBackButton && (
        <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={30} color="white" />
        </Pressable>
      )}
      <Image
        source={require("../../assets/img/danSinFondo.png")}
        style={styles.logo}
      />
      {idToken && !showBackButton && (
        <Pressable onPress={onLogout} style={styles.logout}>
          <MaterialIcons name="logout" size={30} color="white" />
        </Pressable>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: 'darksalmon',
    width: '100%',
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    position: 'absolute',
    bottom: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Edu',
  },
  logout: {
    position: "absolute",
    right: 30,
    bottom: 80,
  },
  backButton: {
    position: "absolute",
    right: 30,
    bottom: 80,
  },
});
