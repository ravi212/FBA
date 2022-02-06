import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Splash from './src/screens/SplashLogo';
import { StyleSheet } from 'react-native';
const Stack = createStackNavigator();
import { LogBox } from 'react-native';
import Terms from './src/screens/Terms';
import { COLOR } from './src/constants/theme';
import { Avatar } from 'react-native-elements';
import images from './src/constants/images';
import { Image } from 'react-native';
import Options from './src/components/optionsCard';
import Tabs from './src/navigation/Tabs';
import Signin from './src/screens/SignIn';
import ForgetPassword from './src/screens/ForgotPassword';
import SignUp from './src/screens/SignUp';
import ResetPassword from './src/screens/ResetPassword';
import Otp from './src/screens/Otp';
import SetRadius from './src/screens/SetRadius';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Signin'}
      >
        <Stack.Screen name='Signin' component={SetRadius}
          options={{
          headerShown: false,
          title: 'SignIn',
          headerStyle: Styles.header,
          headerTintColor: '#ffffff'
          }}
        ></Stack.Screen>
        <Stack.Screen name='Terms' component={Terms} options={{
          title: 'Terms & Conditions',
          headerStyle: Styles.header,
          headerTintColor: '#ffffff'
        }}></Stack.Screen>
        <Stack.Screen name='Home' component={Tabs}
          options={{headerShown: false}}
        //   options={{
        //   title: 'Home',
        //   headerStyle: Styles.homeHeader,
        //   headerTintColor: '#ffffff',
        //   headerRight: () => (
        //    <Image source={images.Logo} style={Styles.image} />
        //   )
        // }}
        ></Stack.Screen>
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
  },
  homeHeader:{
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: COLOR.blue,
    color: COLOR.yellow,
    height: 120,
    shadowColor: COLOR.blue,
  },  
  image:{
    width: 50,
    height: 50,
    marginRight:35,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLOR.yellow
  }
})
export default App;
