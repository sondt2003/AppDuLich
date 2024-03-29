import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/navigation/tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './src/screens/DetailScreen';
import { StatusBar } from 'react-native';
import AccountScreen from './src/screens/AccountScreen';
import AccountDetailScreen from './src/screens/AccountDetailScreen';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from "./src/screens/HomeScreen";
import SupportScreen from "./src/screens/SupportScreen";
import MessSupScreen from "./src/screens/MessSupScreen";
import CreatAccScreen from "./src/screens/CreatAccScreen";
const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"default"} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
        <Stack.Screen name='Root' component={Tabs} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Details' component={DetailScreen} />
        <Stack.Screen name='Account' component={AccountScreen} />
        <Stack.Screen name='Suport' component={SupportScreen} />
        <Stack.Screen name='MessSuport' component={MessSupScreen} />
        <Stack.Screen name='CreatAcc' component={CreatAccScreen} />
        <Stack.Screen name='AccountDetail' component={AccountDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

