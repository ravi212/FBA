import React from 'react';
import {createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import images from '../constants/images';
import { COLOR } from '../constants/theme';

const Tab = createBottomTabNavigator();

const Tabs = () =>{
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                        source={images.Logo}
                        resizeMode='contain'
                        style={
                           {
                               width: 25,
                               height: 25,
                               tintColor: focused ? COLOR.darkGrey : COLOR.lightGrey
                           }
                        }
                        ></Image>
                    )
                }}
            />
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                        source={images.Logo}
                        resizeMode='contain'
                        style={
                           {
                               width: 25,
                               height: 25,
                               tintColor: focused ? COLOR.darkGrey : COLOR.lightGrey
                           }
                        }
                        ></Image>
                    )
                }}
            />
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                        source={images.Logo}
                        resizeMode='contain'
                        style={
                           {
                               width: 25,
                               height: 25,
                               tintColor: focused ? COLOR.darkGrey : COLOR.lightGrey
                           }
                        }
                        ></Image>
                    )
                }}
            />

        </Tab.Navigator>
    )
}