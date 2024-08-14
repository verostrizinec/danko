import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import ItemListCategories from '../screens/ItemListCategories'
import ItemDetails from '../screens/ItemDetails'
import Header from '../components/Header'
import Category from '../components/Category'
import SubtitleHome from '../components/SubtitleHome'

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
   <NavigationContainer>
        <Stack.Navigator
            screenOptions={(
                ({route}) => {
                    return {
                        header: () => <Header title={
                            route.name === "Home" ?
                                <SubtitleHome/> 
                            : 
                                route.name === "Products" ?
                                    route.params.category
                                :
                                    "Detalle del Producto"
                        } />
                    }
                }
            )}
        >
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Products' component={ItemListCategories}/>
            <Stack.Screen name='Detail' component={ItemDetails}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator