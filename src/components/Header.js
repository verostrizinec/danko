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
    alignItems: 'center', // Centra horizontalmente
    justifyContent: 'center', // Centra verticalmente
    paddingVertical: 20,
    backgroundColor: 'darksalmon',
    width: '100%',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: -30, // Ajuste para que el logo y el título se superpongan ligeramente
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: "Edu",
    marginTop: 10,
  },
});
