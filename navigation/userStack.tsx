import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import SignUp from '../screens/SignUp';



const Stack = createStackNavigator();

  //Caminho para utiilizador com Login Feito

 export default function UserStack() {
 return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
      }}>
        <Stack.Screen name="Sign Up" component={SignUp} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}





