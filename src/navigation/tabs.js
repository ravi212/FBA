import React from 'react';
import {createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View } from 'react-native';
import images from '../constants/images';
import { COLOR } from '../constants/theme';
import Home from '../screens/Home';
import Terms from '../screens/Terms';
import Splash from '../screens/SplashLogo';
import Settings from '../screens/Settings';
import AddRequest from '../components/invitationCard';
import AddRequests from '../screens/AddRequests';

const Tab = createBottomTabNavigator();

const Tabs = () =>{
    return (
        <Tab.Navigator initialRouteName='Home' {...{ screenOptions }} >
                <Tab.Screen
                name='Add Requests'
                component={AddRequests}
                options={{
                    headerTitleStyle: styles.headerTitle,
                    headerTintColor: '#ffffff',
                    headerStyle: styles.header,
                    tabBarIcon: ({focused}) => (
                        <Image 
                        source={images.Logo}
                        resizeMode='contain'
                        style={
                          [ {
                               width: 30,
                               height: 30,
                               tintColor: focused ? COLOR.blue : 'white'
                           }]
                        }
                       />
                    )
                }}
            />
                <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <Image 
                        source={images.Logo}
                        resizeMode='contain'
                        style={
                           {
                               width: 30,
                               height: 30,
                               tintColor: focused ? COLOR.blue : 'white'
                           }
                        }
                       />
                    )
                }}
            />
                <Tab.Screen
                name='Settings'
                component={Settings}
                options={{
                    headerTitleStyle: styles.headerTitle,
                    headerTintColor: '#ffffff',
                    headerStyle: styles.header,
                    tabBarIcon: ({focused, color}) => ( 
                        <Image 
                        source={images.Logo}
                        resizeMode='contain'
                        style={
                           {
                               width: 30,
                               height: 30,
                               tintColor: focused ? COLOR.blue : 'white'
                           }
                        }
                       />
                       
                    )
                }}

            />
            
        </Tab.Navigator>
    )
}

const screenOptions =  {
    tabBarStyle:{
      backgroundColor:COLOR.yellow,
      height:70,
      borderTopLeftRadius: 40,
      borderTopRightRadius:40,
      shadowColor: '#ffffff',
      position: 'absolute',
    },
    tabBarItemStyle:{
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    tabBarLabelStyle:{
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    tabBarActiveTintColor: COLOR.blue,
    tabBarInactiveTintColor: 'white',
    tabBarActiveBackgroundColor: COLOR.darkGrey,
  };
  const styles = StyleSheet.create({
    header:{
        backgroundColor: COLOR.blue,
        color: COLOR.yellow,
        height: 90,
        shadowColor: COLOR.blue,
      },
      headerTitle:{
          marginLeft: 20
      }
  });
export default Tabs;