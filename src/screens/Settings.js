import React from "react";
import { SafeAreaView, Text, View, StyleSheet,Image } from "react-native";
import SettingsList from "../components/settingsList";
import images from "../constants/images";
import { COLOR } from "../constants/theme";

const Settings =() =>{
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <SettingsList imageSource={images.Logo} text='Set Radius'/>
            <SettingsList imageSource={images.Logo} text='Family Members'/>
            <SettingsList imageSource={images.Logo} text='Change Home Location'/>
            <SettingsList imageSource={images.Logo} text='Emergency Number'/>
            <SettingsList imageSource={images.Logo} text='Terms & Conditions'/>
            <SettingsList imageSource={images.Logo} text='About'/>
          </View>
        </View> 
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    header:{
      flexDirection: 'row',
      width: '100%',
      height: 100,
      justifyContent:'flex-end',
      alignItems: 'center',
      backgroundColor: COLOR.blue,
    },
    image:{
        width: 50,
        height: 50,
        marginRight:35,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: COLOR.yellow
      },
      container:{
        flex: 1,
        backgroundColor: COLOR.blue
      },
      wrapper:{
        flex: 1,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: '#ffffff',
        paddingTop:50,
        alignItems: "center"
      }
});
export default Settings;