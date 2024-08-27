import { FlatList, StyleSheet, View, ActivityIndicator, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import ProductItem from '../components/ProductItem';
import { useGetProductsQuery } from '../services/shop';
import { colors } from '../global/colors';

const ItemListCategories = ({route}) => {

  const {category} = route.params
  const {data:products,isSuccess,isLoading} = useGetProductsQuery(category)
  const [productsFiltered,setProductsFiltered] = useState([])

  useEffect(()=>{
    if(isSuccess){
      setProductsFiltered(products)
    }
  },[category,isSuccess])

  const onSearch = (input) => {

    if(input){
      setProductsFiltered(productsFiltered.filter(product => product.title.includes(input) ))
    }else{
      setProductsFiltered(products)
    }
   
  }

  if (isLoading) {
    return <ActivityIndicator style={styles.spin} size="large" />;
  }

  return (
    <View style={styles.container}>
      <Search onSearch={onSearch} />
      <FlatList
        data={productsFiltered}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ProductItem product={item} />}
      />
    </View>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darksalmon',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightcoral',
  },
  errorText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
  },
  spin: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: colors.background,
    color: "white",
  }
});
