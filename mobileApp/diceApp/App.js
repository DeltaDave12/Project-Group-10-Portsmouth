import * as React from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen  from './screens/HomeScreen'
import SignInScreen  from './screens/SignInScreen'
import LoginScreen  from './screens/LoginScreen'
import BookingScreen  from './screens/BookingScreen'
import MenuScreen  from './screens/MenuScreen'
import GameScreen  from './screens/GameScreen'
import ProfileScreen  from './screens/ProfileScreen'
import AboutUsScreen from "./screens/AboutUsScreen";
import WishesScreen from "./screens/WishesScreen";
import AchievmentScreen from "./screens/AchievementScreen";

const Stack = createNativeStackNavigator();

/*THIS IS PRIOR VERSION OF REACT NATIVE "react-native": "0.70.5"*/
export const AppNavigator = () => {
return (
  <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="AboutUs" component={AboutUsScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Booking" component={BookingScreen} />
    <Stack.Screen name="Menu" component={MenuScreen} />
    <Stack.Screen name="Game" component={GameScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="3Wishes" component={WishesScreen} />
    <Stack.Screen name="Achievement" component={AchievmentScreen}/>
  </Stack.Navigator>
);
}


export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
