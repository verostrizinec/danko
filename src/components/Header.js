import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { deleteSession } from '../db';
import { useDispatch } from 'react-redux';
import { clearUser } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';

const Header = ({ title }) => {
  const dispatch = useDispatch()
  const idToken = useSelector(state => state.auth.idToken)

  const onLogout = () => {
      deleteSession()
      dispatch(clearUser())
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/img/danSinFondo.png")}
        style={styles.logo}
      />
      {idToken && <Pressable onPress={onLogout} style={styles.logout}>
        <MaterialIcons name="logout" size={30} color="white" />
      </Pressable>}
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
  backButton: {
    position: 'absolute',
    right: 30, // Alineación a la izquierda
    top: '80%',
    transform: [{ translateY: -12 }], // Ajuste vertical para centrar
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    position: 'absolute',
    bottom: 10, // Ajuste para posicionar debajo del logo
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Edu',
  },
  logout: {
    position: "absolute",
    right: 30,
    bottom: 80,

  }
});
