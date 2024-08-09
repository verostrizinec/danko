import { StyleSheet, Text, View, Image } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
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
    alignItems: 'center', // Centra el contenido horizontalmente
    justifyContent: 'center', // Centra el contenido verticalmente
    paddingVertical: 20, // Espacio adicional para el contenedor
    backgroundColor: 'darksalmon', // Color de fondo (opcional)
    width: '100%', // Asegura que el contenedor ocupe todo el ancho
    marginLeft: 50,
    marginBottom: -50,
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: "Edu",
    marginTop: 10, // Espacio entre el logo y el título
  },
});
