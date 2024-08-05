import { StyleSheet, Text, View, FlatList } from 'react-native'
import categories from '../data/categories.json'
import Category from './Category'
import { colors } from '../global/colors'


const Categories = () => {
  return (
    <View style={styles.container}>
        <FlatList
        data={categories}
        keyExtractor={item => item}
        renderItem={({item}) => <Category item={item}/>}
      />
      
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        color:colors.letter,
    }
})