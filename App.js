import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Splash from './src/screens/SplashLogo';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import { Button,StyleSheet } from 'react-native';
const Stack = createStackNavigator();
import { LogBox } from 'react-native';
import Terms from './src/screens/Terms';
import { COLOR } from './src/constants/theme';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Splash'}
      >
        <Stack.Screen name='Splash' component={Splash}></Stack.Screen>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Terms' component={Terms} options={{
          title: 'Terms & Conditions',
          headerStyle: Styles.header,
          headerTintColor: '#ffffff'
        }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Styles = StyleSheet.create({
  header:{
    backgroundColor: COLOR.blue,
    color: COLOR.yellow,
    height: 90,
    shadowColor: COLOR.blue
  }
})
export default App;
