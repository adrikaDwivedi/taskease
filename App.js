import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeUI from './Screens/HomeUI';
import LoginPage from './Screens/LoginPage';
import Signup from './Screens/Signup';
import HomePage from './Screens/HomePage';

  const Stack = createNativeStackNavigator();

export default function App() {


  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="HomePage">
        {/* <Stack.Screen name="Home" component={HomeUI} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup}  />
        <Stack.Screen name="LoginPage" component={LoginPage} /> */}
        <Stack.Screen name="HomePage" component={HomePage}   options={{ headerShown: false }}  />
      </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});



// 1024095845227-605iij06q5a3lvrg5kkkgvca9qihr9r4.apps.googleusercontent.com  client id
// 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   client secret