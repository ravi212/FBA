import React from 'react';
import { View } from 'react-native';

const Header = (props) =>{
    return (
        <View>
            <h1>{props.heading}</h1>
        </View>
    )
}