import { StyleSheet, Text, View, FlatList } from 'react-native'
import Category from './Category'
import { colors } from '../global/colors'
import { useGetCategoriesQuery } from '../services/shop'


const Categories = () => {
  const {data:categories} = useGetCategoriesQuery() //asi recibo las categorias de firebase
  
return (
    <View> 
      <FlatList
        data={categories} 
        keyExtractor={item => item} 
        renderItem={({item}) => <Category item={item}/>} 
      />
    </View>
  );
}

export default Categories

const styles = StyleSheet.create({
    container: {
        color:colors.letter,
    }
})