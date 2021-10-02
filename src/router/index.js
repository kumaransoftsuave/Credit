import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SplashScreen from '../screens/SplashScreen';
import Dashboard from '../screens/Dashboard';
import Register from '../screens/Register';
import AddChild from '../screens/AddChild';
import AddCard from '../screens/AddCard';
import Details from '../screens/Details';
import EditMonthlyLimit from '../screens/EditMonthlyLimit';
import Product from '../screens/Product';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="AddChild" component={AddChild} />
      <Stack.Screen name="AddCard" component={AddCard} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="EditCard" component={EditMonthlyLimit} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};

export default Navigation;
