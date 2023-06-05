import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View } from "react-native";
import FindScreen from "../screens/FindScreen";
import CompassScreen from "../screens/CompassScreen";
import EventScreen from "../screens/EventScreen";
import AccountScreen from "../screens/AccountScreen";
const Tab = createBottomTabNavigator();




const Tabs = () => {
    return (

        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#6A62B7',
                headerShown: false,
                tabBarIconStyle: {
                    color: "#B9D4DC"
                },
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    backgroundColor: "#F8F3F0",
                    height: 72,
                    borderRadius: 44,
                    shadowColor: 'gray',
                    shadowOffset: {
                        width: 0,
                        height: 8
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.5,
                    elevation: 5
                },
                tabBarShowLabel: false
            }}>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', top: "25%", shadowColor: focused ? "#6A62B7" : '', shadowRadius: focused ? 6 : 0, shadowOpacity: focused ? 0.6 : 0 }}>
                            <Ionicons name="home" color={color} size={30} />
                        </View>
                    ),
                }}
            />

            <Tab.Screen name="Event" component={EventScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', top: "25%", shadowColor: focused ? "#6A62B7" : '', shadowRadius: focused ? 6 : 0, shadowOpacity: focused ? 0.6 : 0 }}>
                            <Ionicons name="calendar" color={color} size={30} />
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Find" component={FindScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', top: "25%", shadowColor: focused ? "#6A62B7" : '', shadowRadius: focused ? 6 : 0, shadowOpacity: focused ? 0.6 : 0 }}>
                            <Ionicons name="search" color={color} size={30} />
                        </View>
                    ),
                }}
            />

            <Tab.Screen name="Compass" component={CompassScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', top: "25%", shadowColor: focused ? "#6A62B7" : '', shadowRadius: focused ? 6 : 0, shadowOpacity: focused ? 0.6 : 0 }}>
                            <Ionicons name="compass" color={color} size={30} />
                        </View>
                    ),
                }}
            />


            <Tab.Screen name="Account" component={AccountScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <View style={{ justifyContent: 'center', alignItems: 'center', top: "25%", shadowColor: focused ? "#6A62B7" : '', shadowRadius: focused ? 6 : 0, shadowOpacity: focused ? 0.6 : 0 }}>
                            <Ionicons name="person" color={color} size={30} />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>





    );

}

export default Tabs;
