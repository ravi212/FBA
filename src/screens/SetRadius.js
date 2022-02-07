import React, { useRef, useState } from 'react';
import { Pressable,SafeAreaView, View, StyleSheet, KeyboardAvoidingView, Image, Text, TextInput, ScrollView, Platform, TouchableOpacity } from 'react-native';
import images from '../constants/images';
import { COLOR, FONTS, height } from '../constants/theme';
const SetRadius = () => {
    const[enableShift, setEnableShift] = useState(false);
    const [numOne, setNumOne] = useState('');
    const [numTwo, setNumTwo] = useState('');
    const [numThree, setNumThree] = useState('');
    const [numFour, setNumFour] = useState('');
    const ref= useRef();
    return (
            <SafeAreaView style={styles.container}>
              <View style={styles.header}>
                  <Text style={{  fontWeight:'bold', color:'#ffffff', fontSize: 20}}>Set Radius</Text>
                  <Image source={images.Logo} style={styles.image} />
                </View>
              <View style={styles.wrapper}>
                <Pressable style={({ pressed }) => [
                              {
                                backgroundColor: pressed
                                  ? COLOR.yellow
                                  : COLOR.pressed
                              },
                               styles.button
                         ]} onPress={()=>{}}>
                    <Text style={styles.text}>Save</Text>
                </Pressable>          
            </View>
          </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    header:{
    flexDirection: 'column',
      width: '100%',
      height: 300,
      backgroundColor: COLOR.blue,
      justifyContent:'space-evenly',
      alignItems:'center'
    },
    image:{
        width: 150,
        height: 150,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: COLOR.yellow,
      },
      container:{
        flex:1,
        backgroundColor:COLOR.blue,
      },
      wrapper:{
        flex:1,
        flexDirection: 'row',
        flexWrap:'wrap',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: '#ffffff',
        paddingTop:50,
        alignItems: "center",
        justifyContent: 'center'

      },
      passInput:{
        fontSize:20,
        padding:15,
        borderRadius:15,
        backgroundColor: COLOR.darkGrey,
        color: COLOR.blue,
        marginTop: 30,
        shadowColor: 'grey',
        width: '15%',
        margin: 10,
        textAlign: 'center'
      },
      button: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 50,
        marginTop: 40,
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
      forgetText:{
        flexDirection:'column',
        fontSize:13,
        color: COLOR.blue,
        marginTop:15,
        justifyContent: 'flex-end'
      } 
});
export default SetRadius;