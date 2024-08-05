import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <>
    <Header title='Ecommerce'/>
      <Categories/>
    </>
  )
}

export default Home

const styles = StyleSheet.create({})