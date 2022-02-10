import React from 'react';
import { View, StyleSheet, Image,Text,Pressable } from "react-native";
import { CheckBox } from "react-native-elements";
import images from "../constants/images";
import { COLOR, FONTS, width } from "../constants/theme";
import { Icon } from 'react-native-elements';
const VideoCard = ({imageSource,content, status, date}) =>{
    return (
        <View style={styles.wrapper}>
            <View style={[styles.inner]}> 
                    <Image source={imageSource}  style={styles.image}/>
                    <View style={{flex:1, height:'80%'}}>
                        <Text style={styles.content}>{content}</Text>
                        <Text style={styles.content}>{status}: {date}</Text>
                    </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        width:width-90,
        borderRadius: 40,
        borderColor: COLOR.blue,
        height: 130,
        justifyContent:"center",
        alignItems:"center",
        marginTop: 10,
    },
    inner:{
        borderRadius:15,
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
        marginLeft:15,
        width:100,
        height:100,
        borderColor: COLOR.blue,
        borderWidth: 1,
        borderRadius: 20,
    },
    content:{
        color:COLOR.blue,
        fontSize:10,
        fontFamily:FONTS.font,
        margin:10,
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
export default VideoCard;