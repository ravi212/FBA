import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}
      >
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
