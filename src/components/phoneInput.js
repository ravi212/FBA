import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import images from "../constants/images";
import { COLOR } from "../constants/theme";

const PhoneInput = () =>{
    return (
        <View style={styles.wrapper}>
            <Image style={{height:20, width:30}} source={images.Flag}/>
            <TextInput style={styles.textInput} placeholder="223311212" />
        </View>
    )
}
const styles = StyleSheet.create({
    wrapper:{
        flexDirection: "row",
        backgroundColor: COLOR.darkGrey,
        justifyContent: "center",
        padding:10,
        borderRadius: 10,
        width: '80%'
    },
    textInput:{
        color: COLOR.blue,
        height: 20,
    }
});
export default PhoneInput;