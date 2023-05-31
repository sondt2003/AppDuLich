import { NavigationContainer } from '@react-navigation/native';
import HelloScreen from "./src/screens/HelloScreen";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './src/navigation/tabs';
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (

    <NavigationContainer>

        <Tabs />
    </NavigationContainer>

  );
}

export  default MyStack;