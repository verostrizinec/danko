import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import products from '../data/products.json';
import Search from '../components/Search';
import ProductItem from '../components/ProductItem';

const ItemListCategories = ({ category }) => {
  const [productsFiltered, setProductsFiltered] = useState([]);

  useEffect(() => {
    setProductsFiltered(products.filter(product => product.category === category));
  }, [category]);

  const onSearch = (input) => {
    if (input) {
      setProductsFiltered(productsFiltered.filter(product => product.description.toLowerCase().includes(input.toLowerCase())));
    } else {
      setProductsFiltered(products.filter(product => product.category === category));
    }
  };

  return (
    <View style={styles.container}>
      <Header style={styles.logo} />
      <Search onSearch={onSearch} />
      <FlatList
        data={productsFiltered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductItem product={item} />}
      />
    </View>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Asegúrate de que el contenedor ocupe todo el espacio disponible
  },
  searchContainer: {
    padding: 10,  

  },
});
