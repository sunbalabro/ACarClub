import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from '../../View/Screens/Categories';
import SubCategories from '../../View/Screens/SubCategories';
import Payment from '../../View/Screens/Payment';
import PaymentTransfer from '../../View/Screens/PaymentTransfer';

export default function TabNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Car Categories" component={Categories} />
      <Stack.Screen name="Sub Categories" component={SubCategories} />
      <Stack.Screen name="Payment With Credit Card" component={Payment} />
      <Stack.Screen name="Transaction Successful" component={PaymentTransfer} />
    </Stack.Navigator>
  );
}
