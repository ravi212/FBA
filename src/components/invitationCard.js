import React from "react";
import { View, StyleSheet, Image,Text,Pressable } from "react-native";
import { CheckBox } from "react-native-elements";
import images from "../constants/images";
import { COLOR, FONTS, width } from "../constants/theme";
import { Icon } from 'react-native-elements';
const AddRequest = ({imageSource, contactName }) =>{
    return (
        
        <View style={styles.wrapper}>
            <View style={styles.inner}> 
                    <Image source={imageSource}  style={styles.image}/>
                    <Text style={styles.name}>{contactName}</Text>
            </View>
        <View style={styles.buttonWrapper}>
                <Pressable style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                    ? COLOR.yellow
                                    : COLOR.pressed
                                },
                                
                                styles.button
                                ]} onPress={()=>{}}>
                        <Text style={styles.text}><Icon name="check" size={18} color={COLOR.blue}/>Confirm</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                    ? COLOR.yellow
                                    : COLOR.pressed
                                },
                                
                                styles.button
                                ]} onPress={()=>{}}>
                        <Text style={styles.text}> <Icon name="delete-outline" size={18} color={COLOR.blue}/>Delete</Text>
                </Pressable>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        width:width-90,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: COLOR.blue,
        height: 200,
        justifyContent:"center",
        alignItems:"center",
        marginTop: 10,
    },
    inner:{
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderWidth: 1,
        borderColor: COLOR.blue,
        width: '100%',
        backgroundColor:COLOR.darkGrey,
        flexDirection:'row',
        height: 130,
        justifyContent:'flex-start',
        alignItems:"center",
        marginTop:0
    },
    image:{
        marginLeft:20,
        width:90,
        height:90,
        borderColor: COLOR.blue,
        borderWidth: 1,
        borderRadius: 100,
    },
    name:{
        color:COLOR.blue,
        fontSize:14,
        fontWeight:'bold',
        textAlign:"center",
        fontFamily:FONTS.font,
        marginLeft:20,
        fontSize: 25
    },
    number:{
        color:COLOR.blue,
        fontSize:12,
        textAlign:"center"
    },
    checkBox:{
        position: "absolute",
        width:20,
        height:20,
        right:0,
        top:0
    },
    buttonWrapper:{
        flexDirection:'row',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderWidth: 1,
        borderColor: COLOR.blue,
        height:70,
        width:'100%',
        backgroundColor:COLOR.blue,
        justifyContent:'space-evenly',
        alignItems:'center',
        paddingTop:0
      },
      button: {
        borderRadius:50,
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:10,
        width: 130,
      },
      text: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: FONTS.font,
        color: COLOR.blue,
        letterSpacing:0.25
      },
});
export default AddRequest;