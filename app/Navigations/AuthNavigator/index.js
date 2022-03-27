import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Greetings from '../../View/Screens/Greetings';
import LoginIn from '../../View/Screens/Login';
import Register from '../../View/Screens/Register';

export default function AuthNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Greetings" component={Greetings} />
      <Stack.Screen name="Log In" component={LoginIn} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
