import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ItemListCategories from '../screens/ItemListCategories';
import ItemDetail from '../screens/ItemDetails';
import Search from '../components/Search';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => {
        const isDetailScreen = route.name === 'Detail';
        const isHomeScreen = route.name === 'Home';
        const isSearchScreen = route.name === 'Search';

        return {
          header: () => (
            <Header
              title={
                isHomeScreen
                  ? "Bienvenido"
                  : route.name === "Products"
                    ? route.params?.category
                    : "Detalle del Producto"
              }
              showBackButton={isDetailScreen || isSearchScreen} // Muestra el botón de retroceso en la pantalla de detalle y búsqueda
              showLogoutButton={isHomeScreen} // Muestra el botón de logout solo en la pantalla principal
            />
          ),
        };
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Products' component={ItemListCategories} />
      <Stack.Screen name='Detail' component={ItemDetail} />
    </Stack.Navigator>
  );
};

export default ShopStack;
