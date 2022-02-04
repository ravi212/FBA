import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Term} from '../constants/terms';
import { COLOR, FONTS, height, width } from '../constants/theme';
import Elevations from 'react-native-elevation'
const Separator = () => (
    <View style={styles.separator} />
  );
const Terms = () =>{
    return (

        <View style={styles.backgroundContainer}>
            <View style={styles.wrapper}>
            <Text style={styles.textTitle}>{Term.title}</Text>
                    <Separator />
                <ScrollView style={styles.scroll}>
                    <Text style={styles.textContent}>{Term.term}</Text>
                </ScrollView>
                <Separator />
                <View style={styles.buttonWrapper}>
                <Pressable style={({ pressed }) => [
                                {
                                    backgroundColor: pressed
                                    ? COLOR.yellow
                                    : COLOR.pressed
                                },
                                
                                styles.button
                                ]} onPress={()=>{}}>
                        <Text style={styles.text}>Okay</Text>
                </Pressable>
                </View>
            </View>
        </View>

    )
};
const styles = StyleSheet.create({
    backgroundContainer:{
        flex: 1,
        backgroundColor: COLOR.blue,
    },
    wrapper:{
        flex:1,
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        overflow: 'hidden',
        padding:40,
        paddingBottom:20
    },
    textTitle: {
        fontSize: 16,
        fontFamily: FONTS.font,
        fontWeight: 'bold',
        color:COLOR.blue
    },
    textContent:{
        fontSize: 12,
        fontFamily: FONTS.font,
        color: COLOR.blue,
        marginTop:10,
        marginBottom:10,
        textAlign: 'justify'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      button: {
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        ...Elevations[4]
      },
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        fontFamily: FONTS.font,
        letterSpacing: 0.25,
        color: 'white',
      },
});
export default Terms;