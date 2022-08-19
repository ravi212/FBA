import React, { useState } from 'react';
import { Pressable,SafeAreaView, View, StyleSheet, KeyboardAvoidingView, Image, Text, TextInput, ScrollView, Platform, TouchableOpacity } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import images from '../constants/images';
import { COLOR, FONTS, height } from '../constants/theme';
import { Rating, AirbnbRating } from 'react-native-ratings';
const UploadVideo = ({navigation}) => {
    const[enableShift, setEnableShift] = useState(false);
    
    return (
     <KeyboardAvoidingView 
     keyboardVerticalOffset={-200}
      style={{flex:1, backgroundColor:'white'}} 
      behavior={Platform.OS === "android" ? "position" : "padding"} 
      enabled={enableShift}>
        <ScrollView bounces={false}>
            <SafeAreaView style={styles.container}>
              <View style={styles.header}>
              <Image source={images.VideoSample} style={styles.image} />
                </View>
            <View style={{height:height+150}}> 
              <View style={styles.wrapper}>
              <TextInput
              placeholderTextColor={COLOR.blue}
              multiline={false}
              placeholder="Enter officers name"
              style={styles.passInput}
              onFocus={()=>setEnableShift(true)}
            />
            <TextInput
              placeholderTextColor={COLOR.blue}
              multiline={false}
              placeholder="Badge"
              style={styles.passInput}
              onFocus={()=>setEnableShift(true)}
            />
            <TextInput
              placeholderTextColor={COLOR.blue}
              multiline={false}
              placeholder="Police department name"
              style={styles.passInput}
              onFocus={()=>setEnableShift(true)}
            />
            <TextInput
              placeholderTextColor={COLOR.blue}
              multiline={true}
              numberOfLines={8}
              placeholder="Comment on the officers behavior"
              style={styles.passInput}
              onFocus={()=>setEnableShift(true)}
            />
                        <Text style={styles.ratingText}>Give Officer Rating</Text>
            <Rating
                type='star'
                imageSize={30}
                style = {styles.rating}
            />
            <View style= {styles.agree}>
            </View>
                <Pressable style={({ pressed }) => [
                              {
                                backgroundColor: pressed
                                  ? COLOR.yellow
                                  : COLOR.pressed
                              },
                               styles.button
                         ]} >
                    <Text style={styles.text}>Submit </Text>
                </Pressable>
            </View>
            </View>
          </SafeAreaView>
        </ScrollView>
     </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
  header:{
  flexDirection: 'column',
    width: '100%',
    height: 200,
    backgroundColor: COLOR.blue,
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  imageWrapper:{
      width:130,
      height:130,
      marginBottom: 10
  },
  image:{
      width: 220,
      height: 150,
      borderRadius: 10,
      borderColor: COLOR.yellow,
      marginBottom:10
    },
    imageSelector:{
        position:'absolute',
        width: 40,
        height:40,
        bottom:0,
        right:0,
    },
    container:{
      flex:1,
      backgroundColor:COLOR.blue,
    },
    wrapper:{
      flex:1,
      borderTopRightRadius: 40,
      borderTopLeftRadius: 40,
      backgroundColor: '#ffffff',
      paddingTop:20,
      alignItems: "center",
    },
    passInput:{
      fontSize:15,
      padding:15,
      borderRadius:15,
      backgroundColor: COLOR.darkGrey,
      color: COLOR.blue,
      marginTop: 15,
      shadowColor: 'grey',
      width: '80%',
      textAlignVertical: 'top'
    },
    button: {
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 20,
      paddingHorizontal: 40,
      borderRadius: 50,
      marginTop: 20,
      width:'60%'
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      fontFamily: FONTS.font,
      letterSpacing: 0.25,
      color: COLOR.blue,
    },
    agree:{
        flexDirection:'row'
    },
    agreeText:{
      fontSize:13,
      color: COLOR.blue,
      marginTop:15,
    } ,
    termsText:{
        fontWeight:'bold',
        fontSize:14,
        color: COLOR.blue,
        marginTop:15,
      },
    rating: {
        margin: 10
    },
    ratingText:{
        fontSize:16,
        color: COLOR.blue,
        marginTop:15,
    },
});
export default UploadVideo;