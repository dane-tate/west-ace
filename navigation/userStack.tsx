import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/HomeScreen';



const Stack = createStackNavigator();

  //Caminho para utiilizador com Login Feito

 export default function UserStack() {
 return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}





