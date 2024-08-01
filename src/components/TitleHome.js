import { StyleSheet, Text, View } from 'react-native';

const TitleHome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accesorios hechos a mano con porcelana fria</Text>
    </View>
  );
}

export default TitleHome;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
  },
});
