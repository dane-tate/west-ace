import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

// Caminho para novo Utilizador

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator  
      screenOptions={{
    headerShown: false
      }}>
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}