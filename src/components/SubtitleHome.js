import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons';

const SubtitleHome = () => {
  return (
    <View>
      <Text style={styles.subtitle}>En nuestra tienda encontrarás</Text>
      <FontAwesome6 style={styles.down} name="angles-down" size={30} color="white" />
    </View>
  )
}

export default SubtitleHome

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 30,
      },
      subtitle: {
        fontSize: 20,
        color: '#FFF',
        textAlign: 'center',
        paddingTop: 30,
      },
    down: {
        paddingTop: 30,
        flex: 1,
        textAlign: 'center',
      }
})