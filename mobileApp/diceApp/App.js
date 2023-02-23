import * as React from "react";
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen  from './screens/HomeScreen'
import LoginScreen  from './screens/LoginScreen'
import BookingScreen  from './screens/BookingScreen'
import MenuScreen  from './screens/MenuScreen'
import NewsScreen  from './screens/NewsScreen'
import ProfileScreen  from './screens/ProfileScreen'

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
return (
  <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Booking" component={BookingScreen} />
    <Stack.Screen name="Menu" component={MenuScreen} />
    <Stack.Screen name="News" component={NewsScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
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
