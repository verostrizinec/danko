import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';

const Header = ({ title }) => {
  const navigation = useNavigation();
  const route = useRoute(); 

  return (
    <View style={styles.container}>
      {route.name !== "Home" && (
        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>
      )}
      <Image
        source={require("../../assets/img/danSinFondo.png")}
        style={styles.logo}
      />
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
});
